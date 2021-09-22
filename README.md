**docker-demo**
- Learning how to set up docker images with docker-compose

# API

- `/` ---> access form to register a person's information (name and age)
- `/:name` ---> get information of a person based on their name

# Manual

**Prerequisite**
- Install and run Docker

**How to use**

- Bring up all containers
```
./cmd.sh start
```
- After all containers has been up, you can now access API on web-browser
- Use mongoDB CLI
```
./cmd.sh mongocli
```

- Shut down and remove all containers
```
./cmd.sh stop
```
