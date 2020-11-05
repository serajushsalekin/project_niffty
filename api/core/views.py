import math
from functools import reduce
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import History
from .serializers import HistorySerializer


class Service(APIView):
    def get(self, request):
        try:
            op_name = request.GET['op_name']
            value = int(request.GET['value'])
        except Exception as e:
            return Response(status=400)
        value = int(value)
        if op_name == 'sq':
            output = int(value) ** 2
            return Response(output)
        elif op_name == 'sqrt':
            output = math.sqrt(value)
            return Response(output)
        elif op_name == 'fact':
            output = math.factorial(value)
            return Response(output)
        elif op_name == 'fibbo':
            output = reduce(lambda x, _: x + [x[-2] + x[-1]], [0] * (value-2), [0, 1])
            return Response(output)
        else:
            return Response(status=400)


class ListHistory(ListAPIView):
    serializer_class = HistorySerializer

    def get_queryset(self):
        queryset = History.objects.all()
        num = self.request.query_params.get('n', None)
        if num is not None:
            num_range = int(num)
            queryset = queryset.order_by('-id')[:num_range]
        return queryset
