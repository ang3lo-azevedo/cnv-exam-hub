***

**Question 1**
Not answered
Marked out of 1.00

Migration of VMs in VMotion (live migration) is carried out while attempting to minimize the amount of time the VM may be unresponsive (i.e., while neither running at the current host nor running at the intended destination host). This operation takes place by phases. What ordering of the following actions best reflects how live migration operates?

*(Drag-and-Drop the small sentences to their appropriate place)*

Phase 1: [A]
Phase 2: [B]
Phase 3: [C]
Phase 4: [D]
Phase 5: [E]

**[A]** Capture stable VM state.
**[B]** Copy complete contents of VM memory.
**[C]** Suspend VM execution.
**[D]** Copy incremental VM capsule.
**[E]** Activate VM on host.

***

**Question 2**
Not answered
Marked out of 1.00

In a cloud data center facility where the total energy consumed is 2500 kW and the energy delivered to computing equipment is 2000 kW, what is the PUE (power usage effectiveness) of this facility?

*(select the option that best fits the question).*

Select one:
[ ] a. 1.50
[ ] b. No response (no penalty).
[x] c. 1.25
[ ] d. 1.20
[ ] e. 0.80

***

**Question 3**
Not answered
Marked out of 1.00

During the execution of a MapReduce job, what stage/phase needs to perform sorting before providing results to following stages/phases?
*(select the option that best fits the question).*

Select one:
[ ] a. Map.
[x] b. Shuffling.
[ ] c. Combine.
[ ] d. Reduce.
[ ] e. No response (no penalty)

***

**Question 4**
Not answered
Marked out of 2.00

A smart city set up a simple monitoring system do detect hot-spots of traffic congestion across the city and period of the day, e.g. to allow identifying locations with over 1000 cars passing from 8h00-8h01 (or any other minute interval) over the days, to accurately identify all the typical periods of heavy traffic.

The input consists of a text file where each line stores one record regarding each tracked car (all fields are stored as strings).

The camera logs database contains:-
(cameraID, locationID, day-of-month, month, hour-of-day, minute, second, license-plate, speed).

For this problem, what would be an adequate choice of key k for the tuples to be outputted as intermediate result (output (k, v)) by the mappers while processing each line record?

Assume concat is an auxiliary function that concatenates strings with separator "/" between them.

*(select the option that best fits the question).*
*(No penalty for wrong answer.)*

Select one:
[ ] a. k = concat(cameraID, locationID, day-of-month, month, hour-of-day, minute);
[ ] b. k = concat(cameraID, locationID, minute);
[ ] c. k = concat(license_plate, hour-of-day, minute);
[x] d. k = concat(locationID, hour-of-day, minute);

***

**Question 5**
Not answered
Marked out of 1.00

Partitioners in MapReduce partition the intermediate data before being submitted to the reducers. They can be operated by default or customized by application code.
What do partitioners determine or can influence?
*(select all the correct options).*

Select one or more:
[x] a. A custom Partitioner can determine the set of keys to be processed on the same server.
[ ] b. A custom Partitioner can determine which specific server receives all the tuples with a given key.
[ ] c. A custom Partitioner can determine the order of tuples processing.
[ ] d. No response (no penalty)
[x] e. A custom Partitioner can improve job performance when the key-space is skewed (i.e. some keys appear much more frequently than others).

***

**Question 6**
Not answered
Marked out of 1.00

An Azure application can be comprised of instances of what roles?
*(select the option that best fits the question).*

Select one:
[x] a. Web role and worker role.
[ ] b. Worker role and service role.
[ ] c. No response (no penalty)
[ ] d. Web Role and service role.
[ ] e. Service role and computation role.

***

**Question 7**
Not answered
Marked out of 1.00

When deploying an application on the Google App Engine (GAE) PaaS, programmers have their lives made easier because the GAE takes care of (i.e., manages) the following items of the deployment:
*(select the option that best fits the question).*

Select one:
[ ] a. The GAE manages the hardware, the programming language, the application configuration.
[ ] b. The GAE manages the programming language, the domain services, the application configuration.
[x] c. The GAE manages the hardware, the hypervisor, the frameworks.
[ ] d. The GAE manages the hardware, the frameworks, the application configuration.
[ ] e. No response (no penalty)

***

**Question 8**
Not answered
Marked out of 1.00

Applications running on top of cloud deployments can be integrated by means of using message queues. What approaches can message queues enable?
*(select all the correct options).*

Select one or more:
[ ] a. Message queues allow faster data streaming between applications with pre-agreed formats.
[x] b. Message queues allow reliable messaging among applications.
[ ] c. No response (no penalty)
[ ] d. Message queues allow avoiding double processing of data.
[x] e. Message queues allow weakly connected applications.

***

**Question 9**
Not answered
Marked out of 1.00

Regarding the cloud storage Dynamo from Amazon, identify a specific key design decision.
*(select the option that best fits the question).*

Select one:
[ ] a. Write availability is ensured using vector-clocks whose size adapts to update rates.
[ ] b. Partitioning of data is decided using Gossip for consistency.
[ ] c. Membership information is managed using Merkle trees.
[x] d. Permanent faults are handled asynchronously with anti-entropy.
[ ] e. No response (no penalty)

***

**Question 10**
Not answered
Marked out of 1.00

Consider a cloud deployed web application uses cloud storage to store data about an online book store (e.g., book info, book categories, book quantities at stores, users' orders).
Analyse a simplified scenario where application code processes orders by adding each ordered book to the entity representing the order, and subtracting units of the ordered books from quantities at stores. For correctness, all these operations should be enclosed in a transaction.
In this scenario, what guarantees can the application expect from typical cloud storage systems such as BigTable, Percolator, and Datastore?
*(select all the correct options).*

Select one or more:
[ ] a. No response (no penalty)
[ ] b. Percolator and Datastore can handle transactions encompassing several entities that reside in different servers.
[ ] c. BigTable and Datastore can handle transactions encompassing several entities that reside in the same server.
[ ] d. All of the above cloud storage systems handle distributed transactions.
[x] e. Percolator can handle transactions encompassing several entities that reside in the same server.

Explanation: b) is false because datastore cannot handle transactions in different servers - only in a single server.
c) is false because bigtable cannot handle transactions encompassing more than one entity.
d) is false, only percolator can do this.
e) is true because percolator can do this (and of course it can do more than this), but this is the true sentence.

***

**Question 11**
Not answered
Marked out of 1.00

Resilient distributed datasets (RDDs) are a core contribution of Spark. What are the features of RDDs that enable them to provide fault-tolerance to jobs executing on Spark?
*(select all the correct options).*

Select one or more:
[x] a. RDDs keep information about data dependencies.
[ ] b. RDDs are partitioned logical collection of records.
[ ] c. No response (no penalty)
[ ] d. RDDs can be cached in memory.
[x] e. RDDs keep information about transformations and operations.

***

**Question 12**
Not answered
Marked out of 1.00

Consider a stream processing scenario where all street crossings and traffic lights have sensors/cameras tracking cars' license plate and speed, to assess traffic intensity and detect bottlenecks near real-time during day.
Analyse how the window and event handling of Flink and Spark Streaming may contribute to obtain adequate results in the presence of inevitable communication failures from sensors/cameras, wireless networks, etc. before the data reaches the servers.

*(select all the correct options).*

Select one or more:
[ ] a. Spark Streaming uses micro-batches of RDDs and Flink uses distributed snapshots.
[x] b. Flink can manage windows that are event-time based.
[x] c. Flink and Spark Streaming are able to process all the events exactly-once.
[ ] d. No response (no penalty)
[ ] e. Flink and Spark Streaming provide sliding windows semantics.

◄ CNV-19-20-Exam-1-Part-B (hidden)
