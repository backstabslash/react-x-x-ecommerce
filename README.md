## Running the Application with Docker

This application uses Docker for easy setup and distribution. Follow the steps below to build and run the application with Docker:

### Prerequisites

- **Docker**: If you haven't installed Docker, you can download it from the [official Docker website](https://www.docker.com/).

### Building the Docker Image

1. Navigate to the directory containing the Dockerfile.

2. Build the Docker image by running the following command:

     ```bash
     docker build -t shoeshop .
     ```
    This command builds a Docker image using the Dockerfile in the current directory and names the image as shoeshop.

3. Running the Docker Container

    ```bash
    docker run -p 3000:5173 -d shoeshop
    ```
    This command runs the shoeshop Docker image as a container, maps port 3000 on your host machine to port 5173 on the Docker container, and runs the container in detached mode.

### Accessing the Application
You can now access the application at http://localhost:3000.

### Demo
 ![demopng](https://github.com/backstabslash/react-x-x-ecommerce/blob/main/public/mainpage.png)
