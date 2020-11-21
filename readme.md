# Task 1
- (install node)
- npm install node-static
- npm install http

- ssh pwpg11@pwp.um.ifi.lmu.de -p 22022
- cd task1
- node trackingServer.js

open 
https://pwp.um.ifi.lmu.de/g11/
=> request should be sent

open 
https://pwp.um.ifi.lmu.de/g11/visits
=> a list of IP-addresses and timestamps should be shown


# Task 2
Asynchronous Communication

In order to understand asynchronous communication it is helpful to know how asynchronous functions work:
Using synchronous functions requires that each operation is executed one after another which also means that the execution of code that is not dependent on the current operation is unnecessarily blocked. To avoid blocking code in an application one can use asynchronous functions which allow other proceses to continue before the current process has finished. Asynchronous functions therefore do not return values, but values are passed to the callbacks. Callbacks can be executed after the asynchronous operation regardless of its success or failure. This allows the so-called chaining of promises where the result returend by the previous promise is the input of the next promise. 
Similar to this one can regard asynchronous communication as the process of two parties sending data to each other while the process of receiving data from the other party has not finished.

Microservices

Monolithic systems have many disadvantages such as code complexity which is difficult to maintain and develop, this is why microservices, a system where functionalities are spread over a net of multiple smaller services has come to light.
Using loosely-coupled microservices facilitates the scaling of the system and allows new features to be implemented, tested and deployed independently. The services can be written in different languages and on different technologies, which is not possible in monolithic structures. Each microservice communicates with the other services and each manages its own state and data, however this requires a mechanism to ensure data consistency (e.g. by using design patterns such as the event-oriented pattern). 




