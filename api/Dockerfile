FROM python:3.8-alpine


WORKDIR /app/api
COPY requirements.txt /app/api
RUN pip install -r requirements.txt

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
