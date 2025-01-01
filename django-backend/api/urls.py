from django.urls import path
from .views import SessionListView, user_login, create_payment_session, get_csrf_token, is_authenticated

urlpatterns = [
    path('sessions/', SessionListView.as_view(), name='session-list'),
    path('login/', user_login, name='user_login'),
    path('create-payment-session/', create_payment_session, name='create_payment_session'),
    path('csrf-token/', get_csrf_token, name='csrf_token'),
    path('authenticated/', is_authenticated, name='authenticated'),
]
