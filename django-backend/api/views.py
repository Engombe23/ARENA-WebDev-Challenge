# Packages
from rest_framework.generics import ListAPIView
from .models import Session
from .serializers import SessionSerializer
from django.contrib.auth import authenticate
from django.http import JsonResponse
import stripe
from django.conf import settings
from rest_framework_simplejwt.tokens import RefreshToken
from django.middleware.csrf import get_token
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie

# Sessions
class SessionListView(ListAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

# User Login
def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = authenticate(request, username=username, password=password)
        
        if user:
            refresh = RefreshToken.for_user(user)
            return JsonResponse({
                'success': True, 
                'refresh': str(refresh), 
                'access': str(refresh.access_token),
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email,
                }
            })
        else:
            return JsonResponse({'success': 'False', 'message': 'Invalid login'})
    return JsonResponse({'success': False, 'message': 'Only POST Requests'})

# CSRF Token
@ensure_csrf_cookie
def get_csrf_token(request):
    csrf_token = get_token(request)
    response = JsonResponse({'csrfToken': csrf_token})
    response.set_cookie(
        key='csrftoken',
        value=csrf_token,
        httponly=False,
        samesite='Lax',
        secure=False,
    )
    
    return response


# Authentication

@login_required
def is_authenticated(request):
    return JsonResponse({'authenticated': True})

def not_authenticated(request):
    return JsonResponse({'authenticated': False})

# Stripe

stripe.api_key = settings.STRIPE_SECRET_KEY

def create_payment_session(request):
    if request.method == 'POST':
        try:
            session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=[{
                    'price_data': {
                        'currency': 'gbp',
                        'product_data': {
                            'name': request.POST.get('session_name'),
                        },
                        'unit_amount': int(request.POST.get('price')) * 100,
                    },
                    'quantity': 1,
                }],
                mode='payment',
                success_url='http://localhost:3000/success',
                cancel_url='http://localhost:3000/cancel',
            )
            return JsonResponse({'url': session.url})
        except Exception as e:
            return JsonResponse({'error': str(e)})
    return JsonResponse({'error': 'Invalid request method'})