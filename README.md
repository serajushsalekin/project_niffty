# project_niffty



## Installation [with Docker]

```bash
docker-compose build
docker-compose up -d
docker-compose exec django  python manage.py makemigrations core
docker-compose exec django  python manage.py migrate
```



## License
[MIT](https://choosealicense.com/licenses/mit/)
