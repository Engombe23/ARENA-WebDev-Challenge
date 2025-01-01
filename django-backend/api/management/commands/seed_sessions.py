from django.core.management.base import BaseCommand
from api.models import Session
from datetime import datetime
from django.utils.timezone import make_aware

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        # Dummy Sessions
        sessions = [
            {
                "sport": "Football",
                "date_time": make_aware(datetime(2024, 1, 10, 18, 0)),
                "location": "Place X, North London",
                "game_size": "5-a-side",
                "price_per_participant": 10.00,
                "slots_remaining": 4,
            },
            {
                "sport": "Tennis",
                "date_time": make_aware(datetime(2024, 1, 11, 15, 0)),
                "location": "Place Y, South London",
                "game_size": "Singles Match",
                "price_per_participant": 20.00,
                "slots_remaining": 2,
            },
            {
                "sport": "Basketball",
                "date_time": make_aware(datetime(2024, 1, 12, 20, 0)),
                "location": "Place Z, East London",
                "game_size": "3v3",
                "price_per_participant": 15.00,
                "slots_remaining": 6,
            },
            {
                "sport": "Cricket",
                "date_time": make_aware(datetime(2024, 1, 13, 10, 0)),
                "location": "Place W, West London",
                "game_size": "11-a-side",
                "price_per_participant": 8.00,
                "slots_remaining": 10,
            },
            {
                "sport": "Volleyball",
                "date_time": make_aware(datetime(2024, 1, 14, 14, 0)),
                "location": "Place V, Central London",
                "game_size": "6v6",
                "price_per_participant": 12.00,
                "slots_remaining": 12,
            },
            {
                "sport": "Badminton",
                "date_time": make_aware(datetime(2024, 1, 15, 18, 0)),
                "location": "Place U, South London",
                "game_size": "Doubles Match",
                "price_per_participant": 5.00,
                "slots_remaining": 8,
            },
            {
                "sport": "Football",
                "date_time": make_aware(datetime(2024, 1, 16, 17, 0)),
                "location": "Place T, North London",
                "game_size": "7-a-side",
                "price_per_participant": 12.00,
                "slots_remaining": 5,
            },
            {
                "sport": "Tennis",
                "date_time": make_aware(datetime(2024, 1, 17, 10, 0)),
                "location": "Place S, East London",
                "game_size": "Doubles Match",
                "price_per_participant": 18.00,
                "slots_remaining": 3,
            },
        ]

        # Bulk create sessions
        for session in sessions:
            Session.objects.create(**session)

        self.stdout.write(self.style.SUCCESS("8 dummy sessions created"))
