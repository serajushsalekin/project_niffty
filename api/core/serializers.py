from rest_framework.serializers import ModelSerializer
from core.models import History


class HistorySerializer(ModelSerializer):
    class Meta:
        model = History
        fields = '__all__'

