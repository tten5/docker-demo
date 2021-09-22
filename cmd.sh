# bring up all containers
start(){
    docker-compose up -d
}

# remove all containers
stop(){
    docker-compose down --volumes --remove-orphans
}

# access mongoDB CLI
mongocli(){
    docker exec -it mongodb mongo
}

#
#
# ENTRY POINT
#
#

CMD=${1}
case $CMD in
    "start")
        echo "Starting containers"
        start
    ;;
    "stop")
        echo "Removing containers"
        stop
    ;;
    "mongocli")
        echo "Start mongodb CLI. Press Ctrl+D to exit"
        mongocli
    ;;
    *)
        echo "Unknown command"
    ;;
esac