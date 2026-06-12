***

**CNV-25-26 Sample Exam**

***

**Question 1**
Not answered
Not graded
v14 (latest)

**Identification and Rules:**
**Please fill in your identification in the draft sheet you were provided. Return it at the end of the exam after completely closing your submission.**
**In the draft sheet and in this question you must insert your exam code given to you by the person watching the exam. You exam is not valid without the exam code.**
**The exam is without consultation (no other windows or apps beside the one where the exam is being done). Otherwise, exam is annulled.**
The exam has a time limit of 80 minutes. You can only leave after submitting your exam and only after 45 minutes. We take the best grade of the two exams.
There will be no further information about the exam questions (*dúvidas acerca do enunciado*) provided during the exam, besides the question text itself.
Answer the questions given the context in the question.
There are 24 actual questions in total in the exam, all graded with the same weight except the Map-Reduce problem that has a weight twice a normal (all others) question (1 mark -> 0.8 in 1-20 scale).
E.g. for a final grade of 8/20 ("valores") you need to sum up 10 marks, for a final grade of 15/20 ("valores") you need to sum up 18.75 marks. For a grade of 20/20 ("valores"), you need to sum up the 25 complete marks.
*(Only if strictly needed, you can also insert here any other notes regarding the answering of some question(s) in the exam clearly identifying them in your comments).*
Good work.
LV.

**Note:**
- Questions are presented in randomized order. Make sure you visit all of them. They cover different difficulty levels.
- In all questions where a wrong choice may lead to penalty there is an option, e.g. "*No response (no penalty if only option answered)*".
- When you must select only one option, an incorrect choice leads to a penalty (1/number-of-incorrect-or-not-fully-correct-choices), e.g., -33% in question with 4 options.
- In questions where you can select multiple options, the correct and incorrect options are graded in a way that selecting all of them leads to zero score, there is never a penalty (in the special case of 1 right and 1 wrong selected, I will manually assign half the score of one correct option).

***

**Question 2**
Not answered
Marked out of 1.00
v4 (latest)

In the context of Cloud Computing, identify the available deployment models for a cloud.
*(select all the correct options).*
Select one or more:
a. Public cloud.
b. Software cloud.
c. Hybrid cloud.
d. Physical cloud.

Your answer is incorrect.
The correct answers are: Public cloud., Hybrid cloud.

***

**Question 3**
Not answered
Marked out of 1.00
v3 (latest)

In the context of binary translation, during emulation, the Emulation Manager (EM) performs look-ups using a Map Table to determine what code to emulate or execute next.
Identify the values that are involved in this look-up.
*(select all the correct options).*
a. Source Program Counter (SPC).
b. Target Program Counter (TPC).
c. Stack Pointer.
d. Register context block.

Your answer is incorrect.
The correct answers are: Source Program Counter (SPC)., Target Program Counter (TPC).

***

**Question 4**
Not answered
Marked out of 1.00
v2 (latest)

In processor virtualization (System VMs), Theorem 1 addresses ( [dropdown] ) VMM construction.
From that theorem we can conclude the following:
- the set of privileged instructions for that computer needs to be ( [dropdown] ) the set of sensitive instructions.
- there can be any number of ( [dropdown] ) instructions.
- there must not be any ( [dropdown] ) instructions.
*(no penalty for wrong answers).*

Your answer is incorrect.
The correct answer is:
In processor virtualization (System VMs), Theorem 1 addresses ([efficient]) VMM construction.
From that theorem we can conclude the following:
- the set of privileged instructions for that computer needs to be [equal to or a superset of] the set of sensitive instructions.
- there can be any number of [innocuous] instructions.
- there must not be any [critical] instructions.
*(no penalty for wrong answers).*

***

**Question 5**
Not answered
Marked out of 1.00
v3 (latest)

What mappings of page addresses are employed in Memory Virtualization carried out by system VMs?
*(select all the correct options).*
Select one or more:
a. guest addresses to virtual addresses.
b. virtual addresses to real addresses.
c. real addresses to physical addresses.
d. physical addresses to OS addresses.

Your answer is incorrect.
The correct answers are: virtual addresses to real addresses., real addresses to physical addresses.

***

**Question 6**
Not answered
Marked out of 1.00
v2 (latest)

When deploying instances in Amazon Web Services (AWS), the user can make selections based on geographical and fault-tolerance criteria.
What are they?
*(select the option that best fits the question).*
a. **No response (no penalty if only option answered).**
b. Types and Availability Zones.
c. Regions and Availability Zones.
d. Domains and Regions.
e. Areas and Locations.

Your answer is incorrect.
The correct answer is:
Regions and Availability Zones.

***

**Question 7**
Not answered
Marked out of 1.00
v4 (latest)

When deploying workloads in the cloud, there is a sharing of responsibilities between the user and the cloud service provider (CSP), in the context of a service-level agreement (SLA).
What is the correct assessment, when a given problem arises, considering the sharing of responsibilities is used to determine who (user, CSP) should correct the situation?
*(select the option that best fits the question).*
a. In IaaS and PaaS, when there is a security problem in application code, the CSP is responsible for correcting the situation.
b. In IaaS and PaaS, when there is a hardware failure, the CSP is responsible for correcting the situation.
c. In PaaS and FaaS, when there is a problem with the execution environment, the user is responsible for correcting the situation.
d. **No response (no penalty if only option answered).**
e. In IaaS and SaaS, when there is a large scale bug in application software, the CSP is responsible for correcting the situation.

Your answer is incorrect.
The correct answer is:
In IaaS and PaaS, when there is a hardware failure, the CSP is responsible for correcting the situation.

***

**Question 8**
Not answered
Marked out of 1.00
v2 (latest)

Nova Scheduler is the component in OpenStack that is responsible for launching instances (virtual servers) and deciding in what physical machines (hosts, nodes) they should be launched.
The built-in scheduler is the Filter Scheduler. It is parametrizable and operates in phases: i) gathering state of all compute nodes; ii) finding suitable hosts; iii) choosing the best nodes.
Consider a scenario where the developer wants to launch a VM instance that requires:
- 4 VCPUs and
- 4 GB of memory
Furthermore, he/she wants to:
- employ a balancing policy (i.e. attempt at making the new VM instance to run on one of the least loaded nodes, so as to balance the load overall).
- give priority to free memory over available CPU when selecting hosts.
How can the custom filters and weights of this algorithm be parametrized/configured in order to achieve these goals ?
*(select the option that best fits the question).*

a. Use filters (vcpus_total >= 4; free_ram_mb >= 4096), use weights (RAMWeigher = 2; CPUWeigher= 1).
b. Use filters (vcpus_total >= 4; free_ram_mb >= 4096), use weights (RAMWeigher = 1; CPUWeigher= -2).
c. Use filters (vcpus_total >= 4; free_ram_mb >= 8192), use weights (RAMWeigher = 1; CPUWeigher= 1).
d. **No response (no penalty).**
e. Use filters (vcpus_total >= 4; free_ram_mb >= 4096), use weights (RAMWeigher = -2; CPUWeigher= -1).

Your answer is incorrect.
The correct answer is: Use filters (vcpus_total >= 4; free_ram_mb >= 4096), use weights (RAMWeigher = 2; CPUWeigher= 1).

***

**Question 9**
Not answered
Marked out of 1.00
v6 (latest)

The interaction of AWS instances with other AWS instances and with the outside world needs to be monitored and allowed only when that is intended by the application developers/administrators.
How is this carried out in AWS?
*(select all the correct options).*

a. DNS can be set up to enforce access control to AWS instances.
b. Developers/administrators can use IP rules to specify protocol and destination port of accepted traffic.
c. Security groups are paid per rule.
d. Security groups can be added to or removed from each AWS instance.

Your answer is incorrect.
The correct answers are: Security groups can be added to or removed from each AWS instance., Developers/administrators can use IP rules to specify protocol and destination port of accepted traffic.

***

**Question 10**
Not answered
Marked out of 1.00
v3 (latest)

What sequence of byte-code could illustrate the invocation of an instance method (receiving two integer arguments) on the current object's context ?
*(select the option that best fits the question).*

a.
iload_1
iload_2
aload_0
invokevirtual #4
b. **No response (no penalty if only option answered).**
c.
iload_1
iload_2
invokevirtual #1
d.
aload_0
dup
iload_2
iload_1
invokespecial #7
e.
aload_0
ldc #3
iload_1
invokevirtual #1

Your answer is incorrect.
partially correct (using relevant byte-codes but in wrong order):
iload_1
iload_2
aload_0
invokevirtual #4
--------------------
The correct answer is:
aload_0
ldc #3
iload_1
invokevirtual #1

***

**Question 11**
Not answered
Marked out of 1.00
v3 (latest)

Consider the typical deployment of the algorithm Generational GC in how it organizes the heap, how it identifies and preserves reachable (live) objects, and detects and reclaims garbage objects to free up memory for the application.
What are the key specific feature(s) of this GC algorithm when compared to other algorithms?
*(select the option that best fits the question).*

a. It divides the heap in two zones and never performs multiple passes in most of the heap space.
b. It carries out garbage collection with an average longer collection time.
c. It divides the heap in two zones and wastes half of memory in one of these zones.
d. It employs a copying GC in the mature space to handle long-lived objects and to prevent fragmentation.
e. **No response (no penalty if only option answered).**

Your answer is incorrect.
partial correct: It divides the heap in two zones and never performs multiple passes in most of the heap space.
*(although less frequent, compaction of the tenured space, which occupies most of the heap space, must be carried out when there is no free memory).*
The correct answer is:
It divides the heap in two zones and wastes half of memory in one of these zones.

***

**Question 12**
Not answered
Marked out of 1.00
v3 (latest)

Method inlining is a key and frequently employed optimization to achieve high-performance emulation in executing Java applications.
Consider a scenario, simulating an aquarium with 1000 objects where each object instance represents one specimen of a marine animal (the superclass).
The execution is dominated by an animation loop where each specimen is animated by calling a simple virtual method animate(......) that updates its 3D coordinates based on a direction and speed provided (details not relevant) and renders the 3D model of the specimen.
The distribution of specimens (and objects and their subclasses) is the following:
- sardines - 90% of the specimens.
- all other marine animals - 10% of the specimens, covering several classes.
In this scenario the animation loop will consecutively invoke virtual method animate() on each of objects that represent specimens, according to the previous distribution (i.e., a methods with the same name but with different code, according to object class).
Consider the following execution costs for key tasks that the JVM needs to carry out when emulating this code:
- checking object's type/class - 1 instruction.
- retrieving method's address from type/class method table - 5 instructions.
- executing code snippet to pass arguments and call method - 5 instructions.
- executing the animate() method for each of the marine animals - 4 instructions, regardless of type/class, for simplicity.
Based on the parameters:
- calculate what is the average cost of animating each marine animal without optimizations.
- explain how to calculate the average cost of animating each marine animal if the optimization virtual method in-lining (guarded inlining) is applied, according the above distribution of objects and execution costs.
- briefly explain the speed up that could be obtained.

**Solution sketch:**
- Average cost of animation each marine animal = normal path without any attempt to optimize.
o Retrieving method's address + pass arguments and call method + executing method
o 5 + 5 + 4 = 14 instructions.
*(There is no check of object's class in the slow path as the class method table is going to be looked up anyway, there is no test against any specific value).*
- Average cost with method in-lining = 90% fast path + 10% slow path
o Fast path = check object's type and if it is sardine, execute method in-lined code directly
o 1 + 4 = 5 instructions, i.e. the explicit test against type 'sardines' plus the execution of the in-lined code (no need for method look-up or argument passing or method calling)
o Slow path = once failed the check on the object's type (that is always done to try to execute the fast path), invoke the method in the usual way, with lookup and arguments passing and method calling (knowing it is not the 'sardine' type but any other one).
o 1 + 5 + 5 + 4 = 15 instructions
o Average cost = 90% * 5 + 10% * 15 = 4.5 + 1.5 = 6.0
- Speedup = slow path / fast path
o 14 / 6.0 = 2.33 speedup, or
o ( 6 / 14 ) = 57.14% of reduction in instructions executed.
*- (no need to provide results of calculations, just present the calculation procedure clearly/explicitly).*

***

**Question 13**
Not answered
Marked out of 1.00
v2 (latest)

In the context of the message life-cycle in Google Pub/Sub, what is the sequence of steps that best reflects what stakes place for all messages?
*(Drag-and-Drop the small sentences to their appropriate place)*

Action 1: [ ]
Action 2: [ ]
Action 3: [ ]
Action 4: [ ]
Action 5: [ ]

Your answer is incorrect.
1 correct -> 25%
2 correct -> 50%
3 correct -> 75%
5 correct -> 100%
(it is impossible to have 4 correct and 1 incorrect in this scheme, hence the adjustment).
The correct answer is:
In the context of the message life-cycle in Google Pub/Sub, what is the sequence of steps that best reflects what stakes place for all messages?
*(Drag-and-Drop the small sentences to their appropriate place)*

Action 1: [The publisher sends the message.]
Action 2: [The message is synchronously replicated.]
Action 3: [The message is delivered to a given subscriber.]
Action 4: [The acknowledgment is sent to Google Pub/Sub.]
Action 5: [The message is removed from the subscriber's queue.]

***

**Question 14**
Not answered
Marked out of 1.00
v4 (latest)

When deploying an application on the Google App Engine (GAE) PaaS, how does the GAE achieve scalability, i.e. by adhering to what specific behavior?
*(select the option that best fits the question).*

a. Web apps are permanently kept in memory.
b. **No response (no penalty if only option answered).**
c. Requests are sent to the servers where the application is already running.
d. Internal application data is managed using a LRU (least recently used) policy.
e. Application state in static variables is automatically managed.

Your answer is incorrect.
partial correct: Web apps are permanently kept in memory.
*(kept in memory but, not not permanently)*
The correct answer is: Requests are sent to the servers where the application is already running.

***

**Question 15**
Not answered
Marked out of 1.00
v10 (latest)

Function-as-a-Service (FaaS) aims to improve on the delivery model provided by Infrastructure-as-a-Service (IaaS).
One such example is AWS Lambda that follows a specific pricing model.
Identify the specific aspects that are considered when charging the user for the actual resource utilization of a function over a given period of time, when compared to AWS EC2.
*(select all the correct options).*

a. Hard disk sized reserved for the function.
b. Total Input/Output bandwidth consumed by the function.
c. Memory reserved for the function.
d. Number of function invocations.

Your answer is incorrect.
The correct answers are:
Number of function invocations.,
Memory reserved for the function.

***

**Question 16**
Not answered
Marked out of 1.00
v7 (latest)

Function-as-a-Service (FaaS) brings to programmers significant advantages.
Nonetheless, cold starts resulting from VM/container and runtime startup introduce significant latency penalties in short invocations.
What approaches can the providers implement to address cold starts and make them less frequent?
*(select all the correct options).*

a. Functions could reuse already started execution environments.
b. Providers could execute concurrently several lambdas in the same runtime.
c. Functions execution could be triggered based on events triggered or new or updated data.
d. Functions could be compiled and intialized ahead of time.

Your answer is incorrect.
The correct answers are:
Functions could reuse already started execution environments.,
Functions could be compiled and intialized ahead of time.,
Providers could execute concurrently several lambdas in the same runtime.

***

**Question 17**
Not answered
Marked out of 1.00
v5 (latest)

The architecture of the Google File System/Hadoop File System (GFS/HDFS) is tuned/optimized for specific operation scenarios.
From the following, what is the type of operation that GFS/HDFS was specially designed to support?
*(select the option that best fits the question).*

a. Sequential overwrite access to very large files.
b. **No response (no penalty if only option answered).**
c. Random/direct read access to very large files.
d. Sequential read access to very large files.
e. Random/direct read access to small files.

Your answer is incorrect.
partial correct: Sequential overwrite access to very large files.
*(not overwrite, creation of new files or appending existing files)*
The correct answer is:
Sequential read access to very large files.

***

**Question 18**
Not answered
Marked out of 1.00
v3 (latest)

In BigTable, the master is a single process that performs top-level coordination for the entire cluster.
Although this may potentially incur in a bottleneck, BigTable frees the master from substantial coordination effort because of an important design decision.
Which one is the most relevant?
*(select the option that best fits the question).*

a. BigTable uses metadata tablets to organize partitioning.
b. **No response (no penalty if only option answered).**
c. BigTable allows sequential scanning of entities (rows) based on key-prefixes.
d. BigTable performs compaction of memtables into SSTables to reduce log and memory occupation.
e. In BigTable, tablet servers keep written data in a temporary memory table.

Your answer is incorrect.
The correct answer is:
BigTable uses metadata tablets to organize partitioning.

***

**Question 19**
Not answered
Marked out of 1.00
v4 (latest)

Considering the cloud storage Dynamo from Amazon, identify a specific key design decision, adopted by Dynamo creators.
*(select the option that best fits the question).*

a. Membership information is managed using Merkle trees.
b. **No response (no penalty if only option answered).**
c. Availability is ensured using vector-clocks with sizes adapted to update rates.
d. Permanent faults are handled asynchronously with anti-entropy.
e. Partitioning of data is decided using relaxed quorums for eventual consistency.

Your answer is incorrect.
The correct answer is: Permanent faults are handled asynchronously with anti-entropy.

***

**Question 20**
Not answered
Marked out of 1.00
v3 (latest)

In the context of a MapReduce deployment in Hadoop, what is the default size of a *split* (the unit of input data given to a Mapper process) ?
*(select the option that best fits the question).*

a. Size of HDFS blocks.
b. Total input size divided by number of workers.
c. Size of local file system blocks.
d. Average size of files in the input.
e. **No response (no penalty if only option answered).**

Your answer is incorrect.
The correct answer is: Size of HDFS blocks.

***

**Question 21**
Not answered
Marked out of 1.00
v1 (latest)

During the execution of a MapReduce job, what stage/phase performs sorting before providing results to following stages/phases?
*(select the option that best fits the question).*

a. Shuffling.
b. Splitting.
c. Map.
d. Reduce.
e. **No response (no penalty).**

Your answer is incorrect.
The correct answer is: Shuffling.

***

**Question 22**
Not answered
Marked out of 2.00
v17 (latest)

A supervising authority is in charge of monitoring pollution generated in road sections across a region (based on the traffic and estimated CO2 emissions). Consider that only vehicles with combustion engines actually generate CO2 emissions, in this scenario.

For instance, the supervising authority wants to determine whether a specific road section should be subject to traffic reduction measures if the pollution generated by the traffic is considered excessive, while taking into account any specific environmental regulations applied to the road section.

<u>In general, the authority wants to detect normal road sections where the generated pollution is considered very high, and regulated road sections (in vulnerable areas) where the pollution is considered high.</u>

<u>Therefore, a road section is subject to be eligible to traffic reduction measures when:</u>
<u>- it is a normal road and the total emissions from traffic are above 50000.</u>
<u>- it is a regulated road and the total emissions from traffic are above 1000.</u>

The input consists of two text files.

In the first one, **roads.txt**, each line stores the information of one road section:
<roadID>, <length_kms>, <type>
where type may be NORMAL or REGULATED, according to road section environmental vulnerability.

The second one, **trips.txt**, contains all the trips for the period under analysis. Each line stores one complete trip, alongside with the information about the vehicle that was used.
<carID>, <engine>, <power_kw>, <roadID_1>, ..., <roadID_N>
where engine may be ELECTRIC or COMBUSTION, and power_kw is the engine power.

For simplicity, consider that the emissions generated by a vehicle travelling in each road section, when appropriate, are the product/multiplication of the engine power (power_kw) and the road section length (length_kms).

Assume the standard signature for the **mapper**: List<k2,v2> map(string, int, string) and **reducer**: List<k3, v3> reduce(k2, List<v2>) functions, where map has input (filename, cursor/line number, and text line content) and k2, v2, k3 and v3 can all be replaced with types of your choice.

**Write the pseudocode for a MapReduce application, with a single map and a single reduce method.**

<u>The final output of the reduce function should produce, if adequate, a single record for each road section where the supervising authority should analyze further traffic reduction, identifying the road section, the emissions limit, and the actual total emissions for that road section.</u>

*(if you need, you can briefly state any assumptions at the end of the answer after the pseudocode).*

**Solution sketch:**
**Mapper:**
- The first element of the solution is determining the key for the mapper and reducer.
- It should be the route section IDs (roadID) in each of the files as it is the only one that allows to cross-reference the information about each road in the two files (in essence, a join between the relevant information in two tables).
*(This allows the reduce function to receive and process all tuples sharing (i.e. concerning) the same section regardless of their additional information or file provenance.*
*Only this will allow summing the powers of cars that drove through each road section, to calculate the total emissions based on total power and each specific road section length, and finally to determine (based on each road type emissions limit) whether a specific record for further analysis of the road should be emitted.*
*Mappers cannot access external information besides function input. Mappers cannot process the entirety of the two files and keep temporary information about all of them, as this is un-scalable and unfeasible. There is no other way for the reducer to retrieve information regarding a given road or trip besides the arguments of the reduce function receives, i.e., no access to external storage, global hash-table with info of all roads, trips, etc.).*
The mapper will emit two types of tuples (that can be lists with a discriminating field/element), as it is also done in PageRank emitting page rank fragments, and list of page links, using URL as key:
- i) once for each road section, outputting the road specific information of length and type;
- ii) zero, one, or many for each road section transversed during each trip, using each roadID as the key, outputting the power of the car that performed the trip if, and only if, it is not an electric car (that do not have emissions).

**Mapper (path i) – roads.txt database) –**
<u>- When the file argument is roads.txt:</u> *(this means we are reading from the roads database and we can get this from the key in the mapper)*
- Mapper should output with key routeID and include length and type of road explicitly in the tuple so that it enables the reducer to interpret it correctly, in any circumstances, without resorting to special cases where only one of the fields can make sense.
- E.g.
```
      if (file is roads.txt) {
            output(line[0], (ROADS, line[1], line[2]);
      }
```
**Mapper (path ii) – trips.txt database) –**
<u>- When the file argument is trips.txt:</u> *(this means we are reading from the trips database.)*
- Mapper should iterate the route IDs in the line/list (i.e., line[3] -> line[line.length-1]) and output, for each one, the routeID and the power of the car that transversed the road section, only if it is not electric. Once again, it must record explicitly the type of the tuple so that it enables the reducer to interpret it correctly:
```
      else if (file is trips.txt) {
            if (line[1]==COMBUSTION){
                  for (i= 3; i < line.length; i++) {
                        output(line[i], TRIPS, line[2];
                  }
            }
      }
```

**Reducer:**
- At the reducer function, the key is the roadID, and the tuples carry the type information in the first field (v[0]) about ROADS or TRIPS, so that they can processed accordingly. Each execution of the reducer function processes all records with a given roadID outputted by the mappers, and only those.
- the road section should be further analyzed if the total emissions are above the limit for the road type.
```
      int regulated = 0;
      float length = 0;
      float total_power = 0;
      float total_emissions = 0;
      foreach (v in values) {
            if (v[0] == ROADS {
                  length = v[1];
                  regulated = v[2];
            } else {
                  total_power += v[1];
            }
      }
      total_emissions = total_power * length;
      if (regulated == REGULATED && total_emissions > 1000)
            output( key, 1000, total_emissions);
      else if (regulated == NORMAL && total_emissions > 50000)
            output( key, 50000, total_emissions);
```

**Note:** *There is only one map and reduce function. The map can receive splits with (sets of) lines from any of the two giant files. I considered your interpretations when deciding about each file, or simply having a code path to handle “file1” and another code path to handle “file2”, etc.*
Typical errors:
- wrong key selection.
- incorrect filtering of data (not at the mapper)
- assuming roads and trips are present both in all tuples.
- accessing files or external information in the reduce function.
- wrong decision criteria in conditions/ifs.
- Iterating over input files in mapper repeatedly/recursively or iterating tuple in reducer more than once.
- too generic code or English text.

***

**Question 23**
Not answered
Marked out of 1.00
v5 (latest)

When comparing Spark against MapReduce, identify Spark's features that are specifically advantageous when compared to MapReduce?
*(select all the correct options).*

Select one or more:
a. Spark allows processing large amounts of input, while Map Reduce does not.
b. Spark has special support for the reuse (e.g., iterative, interactive) of working sets, while Map Reduce does not.
c. Spark provides automatic fault-tolerance, while Map Reduce does not.
d. Spark allows in-memory processing, while Map Reduce does not.

Your answer is incorrect.
The correct answers are: Spark has special support for the reuse (e.g., iterative, interactive) of working sets, while Map Reduce does not., Spark allows in-memory processing, while Map Reduce does not.

***

**Question 24**
Not answered
Marked out of 1.00
v4 (latest)

Consider a stream processing scenario where messages published in a forum (e.g. tweets, posts) are continuously monitored in order to detect the topics that are trending (e.g., Top-100 ranking of references in messages), considering the number of times they are referenced across messages over time.

Analyze how the window and event handling of Flink and Spark Streaming may contribute to detect the potentially trending topics in a timely manner (so that users may be advised quickly of a potential emerging trending topic, and increase their chances of publishing a message on it as soon as it starts trending).

How could developers detect potentially trending topics in a timely manner as they emerge?
*(select all the correct options).*

a. Spark Streaming can be set up to manage a sliding window with 200 seconds of length and 5 second of sliding interval.
b. Flink can be set up to manage a sliding window of 200 seconds of length and 1 second of sliding interval, and that is event-time based, i.e., to take into account the exact time each message was published.
c. Flink can be set up to manage a sliding window with 25 seconds of length and 1 second of sliding interval.
d. Spark Streaming can be set up to manage a tumbling window of 10 seconds of length.

Your answer is incorrect.
The correct answers are: Spark Streaming can be set up to manage a tumbling window of 10 seconds of length., Flink can be set up to manage a sliding window with 25 seconds of length and 1 second of sliding interval.

***

**Question 25**
Not answered
Marked out of 1.00
v4 (latest)

In a cloud data center facility the total energy consumption is 2400 kW and the energy delivered to computing equipment is 1200 kW.
What is the PUE (power usage effectiveness) of this facility?

*(select the option that best fits the question).*

a. 24.0
b. **No response (no penalty if only option answered).**
c. 2.00
d. 1.20
e. 0.20

The correct answer is: 2.00