from .models import History


class HistoryMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request, *args, **kwargs):
        op_name = request.GET.get('op_name', None)
        operation_list = ['sq', 'sqrt', 'fact', 'fibbo']
        if op_name in operation_list:
            History.objects.create(operation_name=op_name)
        response = self.get_response(request)
        return response
