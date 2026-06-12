window.examConfig = {
    title: "CNV-25-26 Sample Exam",
    timeLimit: 80
};

window.examData = [
  {
    "number": 1,
    "text": "Not graded v14 (latest)\n\nIdentification and Rules: Please fill in your identification in the draft sheet\nyou were provided. Return it at the end of the exam after completely closing\nyour submission. In the draft sheet and in this question you must insert your\nexam code given to you by the person watching the exam. You exam is not valid\nwithout the exam code. The exam is without consultation (no other windows or\napps beside the one where the exam is being done). Otherwise, exam is annulled.\nThe exam has a time limit of 80 minutes. You can only leave after submitting\nyour exam and only after 45 minutes. We take the best grade of the two exams.\nThere will be no further information about the exam questions (d\u00favidas acerca do\nenunciado) provided during the exam, besides the question text itself. Answer\nthe questions given the context in the question. There are 24 actual questions\nin total in the exam, all graded with the same weight except the Map-Reduce\nproblem that has a weight twice a normal (all others) question (1 mark -> 0.8\nin 1-20 scale). E.g. for a final grade of 8/20 (\"valores\") you need to sum up 10\nmarks, for a final grade of 15/20 (\"valores\") you need to sum up 18.75 marks.\nFor a grade of 20/20 (\"valores\"), you need to sum up the 25 complete marks.\n(Only if strictly needed, you can also insert here any other notes regarding the\nanswering of some question(s) in the exam clearly identifying them in your\ncomments). Good work. LV.\n\nNote:\n\n  - Questions are presented in randomized order. Make sure you visit all of\n    them. They cover different difficulty levels.\n  - In all questions where a wrong choice may lead to penalty there is an\n    option, e.g. \"No response (no penalty if only option answered)\".\n  - When you must select only one option, an incorrect choice leads to a penalty\n    (1/number-of-incorrect-or-not-fully-correct-choices), e.g., -33% in question\n    with 4 options.\n  - In questions where you can select multiple options, the correct and\n    incorrect options are graded in a way that selecting all of them leads to\n    zero score, there is never a penalty (in the special case of 1 right and 1\n    wrong selected, I will manually assign half the score of one correct\n    option).",
    "options": [],
    "is_multi": false,
    "correct_ids": [],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 2,
    "text": "In the context of Cloud Computing, identify the available deployment models for\na cloud. (select all the correct options).",
    "options": [
      {
        "id": "a",
        "text": "Public cloud."
      },
      {
        "id": "b",
        "text": "Software cloud."
      },
      {
        "id": "c",
        "text": "Hybrid cloud."
      },
      {
        "id": "d",
        "text": "Physical cloud."
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "a",
      "c"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 3,
    "text": "In the context of binary translation, during emulation, the Emulation Manager\n(EM) performs look-ups using a Map Table to determine what code to emulate or\nexecute next. Identify the values that are involved in this look-up. (select all\nthe correct options).",
    "options": [
      {
        "id": "a",
        "text": "Source Program Counter (SPC)."
      },
      {
        "id": "b",
        "text": "Target Program Counter (TPC)."
      },
      {
        "id": "c",
        "text": "Stack Pointer."
      },
      {
        "id": "d",
        "text": "Register context block."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "a",
      "b"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 4,
    "text": "In processor virtualization (System VMs), Theorem 1 addresses ( [dropdown] ) VMM\nconstruction. From that theorem we can conclude the following:\n\n  - the set of privileged instructions for that computer needs to be (\n    [dropdown] ) the set of sensitive instructions.\n  - there can be any number of ( [dropdown] ) instructions.\n  - there must not be any ( [dropdown] ) instructions. (no penalty for wrong\n    answers).",
    "options": [],
    "is_multi": false,
    "correct_ids": [],
    "fill_in_blanks": [
      "efficient",
      "innocuous",
      "critical"
    ],
    "distractors": [
      "equal to or a subset of",
      "virtual",
      "non-critical",
      "inefficient",
      "user-level",
      "dangerous"
    ]
  },
  {
    "number": 5,
    "text": "What mappings of page addresses are employed in Memory Virtualization carried\nout by system VMs? (select all the correct options).",
    "options": [
      {
        "id": "a",
        "text": "guest addresses to virtual addresses."
      },
      {
        "id": "b",
        "text": "virtual addresses to real addresses."
      },
      {
        "id": "c",
        "text": "real addresses to physical addresses."
      },
      {
        "id": "d",
        "text": "physical addresses to OS addresses."
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "b",
      "c"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 6,
    "text": "When deploying instances in Amazon Web Services (AWS), the user can make\nselections based on geographical and fault-tolerance criteria. What are they?\n(select the option that best fits the question).",
    "options": [
      {
        "id": "a",
        "text": "No response (no penalty if only option answered)."
      },
      {
        "id": "b",
        "text": "Types and Availability Zones."
      },
      {
        "id": "c",
        "text": "Regions and Availability Zones."
      },
      {
        "id": "d",
        "text": "Domains and Regions."
      },
      {
        "id": "e",
        "text": "Areas and Locations."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "c"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 7,
    "text": "When deploying workloads in the cloud, there is a sharing of responsibilities\nbetween the user and the cloud service provider (CSP), in the context of a\nservice-level agreement (SLA). What is the correct assessment, when a given\nproblem arises, considering the sharing of responsibilities is used to determine\nwho (user, CSP) should correct the situation? (select the option that best fits\nthe question).",
    "options": [
      {
        "id": "a",
        "text": "In IaaS and PaaS, when there is a security problem in application code, the CSP is responsible for correcting the situation."
      },
      {
        "id": "b",
        "text": "In IaaS and PaaS, when there is a hardware failure, the CSP is responsible for correcting the situation."
      },
      {
        "id": "c",
        "text": "In PaaS and FaaS, when there is a problem with the execution environment, the user is responsible for correcting the situation."
      },
      {
        "id": "d",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "e",
        "text": "In IaaS and SaaS, when there is a large scale bug in application software, the CSP is responsible for correcting the situation."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "b"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 8,
    "text": "Nova Scheduler is the component in OpenStack that is responsible for launching\ninstances (virtual servers) and deciding in what physical machines (hosts,\nnodes) they should be launched. The built-in scheduler is the Filter Scheduler.\nIt is parametrizable and operates in phases: i) gathering state of all compute\nnodes; ii) finding suitable hosts; iii) choosing the best nodes. Consider a\nscenario where the developer wants to launch a VM instance that requires:\n\n  - 4 VCPUs and\n  - 4 GB of memory Furthermore, he/she wants to:\n  - employ a balancing policy (i.e. attempt at making the new VM instance to run\n    on one of the least loaded nodes, so as to balance the load overall).\n  - give priority to free memory over available CPU when selecting hosts. How\n    can the custom filters and weights of this algorithm be\n    parametrized/configured in order to achieve these goals ? (select the option\n    that best fits the question).",
    "options": [
      {
        "id": "a",
        "text": "Use filters (vcpus_total >= 4; free_ram_mb >= 4096), use weights (RAMWeigher = 2; CPUWeigher= 1)."
      },
      {
        "id": "b",
        "text": "Use filters (vcpus_total >= 4; free_ram_mb >= 4096), use weights (RAMWeigher = 1; CPUWeigher= -2)."
      },
      {
        "id": "c",
        "text": "Use filters (vcpus_total >= 4; free_ram_mb >= 8192), use weights (RAMWeigher = 1; CPUWeigher= 1)."
      },
      {
        "id": "d",
        "text": "No response (no penalty)."
      },
      {
        "id": "e",
        "text": "Use filters (vcpus_total >= 4; free_ram_mb >= 4096), use weights (RAMWeigher = -2; CPUWeigher= -1)."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "a"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 9,
    "text": "The interaction of AWS instances with other AWS instances and with the outside\nworld needs to be monitored and allowed only when that is intended by the\napplication developers/administrators. How is this carried out in AWS? (select\nall the correct options).",
    "options": [
      {
        "id": "a",
        "text": "DNS can be set up to enforce access control to AWS instances."
      },
      {
        "id": "b",
        "text": "Developers/administrators can use IP rules to specify protocol and destination port of accepted traffic."
      },
      {
        "id": "c",
        "text": "Security groups are paid per rule."
      },
      {
        "id": "d",
        "text": "Security groups can be added to or removed from each AWS instance."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "b",
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 10,
    "text": "What sequence of byte-code could illustrate the invocation of an instance method\n(receiving two integer arguments) on the current object's context ? (select the\noption that best fits the question).",
    "options": [
      {
        "id": "a",
        "text": "iload_1 iload_2 aload_0 invokevirtual #4"
      },
      {
        "id": "b",
        "text": "No response (no penalty if only option answered)."
      },
      {
        "id": "c",
        "text": "iload_1 iload_2 invokevirtual #1"
      },
      {
        "id": "d",
        "text": "aload_0 dup iload_2 iload_1 invokespecial #7"
      },
      {
        "id": "e",
        "text": "aload_0 ldc #3 iload_1 invokevirtual #1  Your answer is incorrect. partially correct (using relevant byte-codes but in wrong order): iload_1 iload_2 aload_0 invokevirtual #4"
      }
    ],
    "is_multi": false,
    "correct_ids": [],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 11,
    "text": "Consider the typical deployment of the algorithm Generational GC in how it\norganizes the heap, how it identifies and preserves reachable (live) objects,\nand detects and reclaims garbage objects to free up memory for the application.\nWhat are the key specific feature(s) of this GC algorithm when compared to other\nalgorithms? (select the option that best fits the question).",
    "options": [
      {
        "id": "a",
        "text": "It divides the heap in two zones and never performs multiple passes in most of the heap space."
      },
      {
        "id": "b",
        "text": "It carries out garbage collection with an average longer collection time."
      },
      {
        "id": "c",
        "text": "It divides the heap in two zones and wastes half of memory in one of these zones."
      },
      {
        "id": "d",
        "text": "It employs a copying GC in the mature space to handle long-lived objects and to prevent fragmentation."
      },
      {
        "id": "e",
        "text": "No response (no penalty if only option answered)."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "c"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "note": "partial correct: It divides the heap in two zones and\nnever performs multiple passes in most of the heap space. (although less\nfrequent, compaction of the tenured space, which occupies most of the heap\nspace, must be carried out when there is no free memory)."
  },
  {
    "number": 12,
    "text": "Method inlining is a key and frequently employed optimization to achieve\nhigh-performance emulation in executing Java applications. Consider a scenario,\nsimulating an aquarium with 1000 objects where each object instance represents\none specimen of a marine animal (the superclass). The execution is dominated by\nan animation loop where each specimen is animated by calling a simple virtual\nmethod animate(......) that updates its 3D coordinates based on a direction and\nspeed provided (details not relevant) and renders the 3D model of the specimen.\nThe distribution of specimens (and objects and their subclasses) is the\nfollowing:\n\n  - sardines - 90% of the specimens.\n  - all other marine animals - 10% of the specimens, covering several classes.\n    In this scenario the animation loop will consecutively invoke virtual method\n    animate() on each of objects that represent specimens, according to the\n    previous distribution (i.e., a methods with the same name but with different\n    code, according to object class). Consider the following execution costs for\n    key tasks that the JVM needs to carry out when emulating this code:\n  - checking object's type/class - 1 instruction.\n  - retrieving method's address from type/class method table - 5 instructions.\n  - executing code snippet to pass arguments and call method - 5 instructions.\n  - executing the animate() method for each of the marine animals - 4\n    instructions, regardless of type/class, for simplicity. Based on the\n    parameters:\n  - calculate what is the average cost of animating each marine animal without\n    optimizations.\n  - explain how to calculate the average cost of animating each marine animal if\n    the optimization virtual method in-lining (guarded inlining) is applied,\n    according the above distribution of objects and execution costs.\n  - briefly explain the speed up that could be obtained.",
    "options": [],
    "is_multi": false,
    "correct_ids": [],
    "fill_in_blanks": [],
    "distractors": [],
    "is_open_text": true,
    "solution_sketch": "- Average cost of animation each marine animal = normal path without any\n    attempt to optimize. o Retrieving method's address + pass arguments and call\n    method + executing method o 5 + 5 + 4 = 14 instructions. (There is no check\n    of object's class in the slow path as the class method table is going to be\n    looked up anyway, there is no test against any specific value).\n  - Average cost with method in-lining = 90% fast path + 10% slow path o Fast\n    path = check object's type and if it is sardine, execute method in-lined\n    code directly o 1 + 4 = 5 instructions, i.e. the explicit test against type\n    'sardines' plus the execution of the in-lined code (no need for method\n    look-up or argument passing or method calling) o Slow path = once failed the\n    check on the object's type (that is always done to try to execute the fast\n    path), invoke the method in the usual way, with lookup and arguments passing\n    and method calling (knowing it is not the 'sardine' type but any other one).\n    o 1 + 5 + 5 + 4 = 15 instructions o Average cost = 90% * 5 + 10% * 15 = 4.5\n    \\+ 1.5 = 6.0\n  - Speedup = slow path / fast path o 14 / 6.0 = 2.33 speedup, or o ( 6 / 14 )\n    = 57.14% of reduction in instructions executed. - (no need to provide\n    results of calculations, just present the calculation procedure\n    clearly/explicitly)."
  },
  {
    "number": 13,
    "text": "In the context of the message life-cycle in Google Pub/Sub, what is the sequence\nof steps that best reflects what stakes place for all messages? (Drag-and-Drop\nthe small sentences to their appropriate place)\n\nAction 1: [ ] Action 2: [ ] Action 3: [ ] Action 4: [ ] Action 5: [ ]\n\nYour answer is incorrect. 1 correct -> 25% 2 correct -> 50% 3 correct -> 75% 5\ncorrect -> 100% (it is impossible to have 4 correct and 1 incorrect in this\nscheme, hence the adjustment).",
    "options": [],
    "is_multi": false,
    "correct_ids": [],
    "fill_in_blanks": [
      "The publisher sends the message.",
      "The acknowledgment is sent to Google Pub/Sub.",
      "The message is removed from the subscriber's queue."
    ],
    "distractors": []
  },
  {
    "number": 14,
    "text": "When deploying an application on the Google App Engine (GAE) PaaS, how does the\nGAE achieve scalability, i.e. by adhering to what specific behavior? (select the\noption that best fits the question).",
    "options": [
      {
        "id": "a",
        "text": "Web apps are permanently kept in memory."
      },
      {
        "id": "b",
        "text": "No response (no penalty if only option answered)."
      },
      {
        "id": "c",
        "text": "Requests are sent to the servers where the application is already running."
      },
      {
        "id": "d",
        "text": "Internal application data is managed using a LRU (least recently used) policy."
      },
      {
        "id": "e",
        "text": "Application state in static variables is automatically managed."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "c"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "note": "partial correct: Web apps are permanently kept in\nmemory. (kept in memory but, not not permanently)"
  },
  {
    "number": 15,
    "text": "Function-as-a-Service (FaaS) aims to improve on the delivery model provided by\nInfrastructure-as-a-Service (IaaS). One such example is AWS Lambda that follows\na specific pricing model. Identify the specific aspects that are considered when\ncharging the user for the actual resource utilization of a function over a given\nperiod of time, when compared to AWS EC2. (select all the correct options).",
    "options": [
      {
        "id": "a",
        "text": "Hard disk sized reserved for the function."
      },
      {
        "id": "b",
        "text": "Total Input/Output bandwidth consumed by the function."
      },
      {
        "id": "c",
        "text": "Memory reserved for the function."
      },
      {
        "id": "d",
        "text": "Number of function invocations."
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "c",
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 16,
    "text": "Function-as-a-Service (FaaS) brings to programmers significant advantages.\nNonetheless, cold starts resulting from VM/container and runtime startup\nintroduce significant latency penalties in short invocations. What approaches\ncan the providers implement to address cold starts and make them less frequent?\n(select all the correct options).",
    "options": [
      {
        "id": "a",
        "text": "Functions could reuse already started execution environments."
      },
      {
        "id": "b",
        "text": "Providers could execute concurrently several lambdas in the same runtime."
      },
      {
        "id": "c",
        "text": "Functions execution could be triggered based on events triggered or new or updated data."
      },
      {
        "id": "d",
        "text": "Functions could be compiled and intialized ahead of time."
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "a",
      "b",
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 17,
    "text": "The architecture of the Google File System/Hadoop File System (GFS/HDFS) is\ntuned/optimized for specific operation scenarios. From the following, what is\nthe type of operation that GFS/HDFS was specially designed to support? (select\nthe option that best fits the question).",
    "options": [
      {
        "id": "a",
        "text": "Sequential overwrite access to very large files."
      },
      {
        "id": "b",
        "text": "No response (no penalty if only option answered)."
      },
      {
        "id": "c",
        "text": "Random/direct read access to very large files."
      },
      {
        "id": "d",
        "text": "Sequential read access to very large files."
      },
      {
        "id": "e",
        "text": "Random/direct read access to small files."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "note": "partial correct: Sequential overwrite access to very\nlarge files. (not overwrite, creation of new files or appending existing files)"
  },
  {
    "number": 18,
    "text": "In BigTable, the master is a single process that performs top-level coordination\nfor the entire cluster. Although this may potentially incur in a bottleneck,\nBigTable frees the master from substantial coordination effort because of an\nimportant design decision. Which one is the most relevant? (select the option\nthat best fits the question).",
    "options": [
      {
        "id": "a",
        "text": "BigTable uses metadata tablets to organize partitioning."
      },
      {
        "id": "b",
        "text": "No response (no penalty if only option answered)."
      },
      {
        "id": "c",
        "text": "BigTable allows sequential scanning of entities (rows) based on key-prefixes."
      },
      {
        "id": "d",
        "text": "BigTable performs compaction of memtables into SSTables to reduce log and memory occupation."
      },
      {
        "id": "e",
        "text": "In BigTable, tablet servers keep written data in a temporary memory table."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "a"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 19,
    "text": "Considering the cloud storage Dynamo from Amazon, identify a specific key design\ndecision, adopted by Dynamo creators. (select the option that best fits the\nquestion).",
    "options": [
      {
        "id": "a",
        "text": "Membership information is managed using Merkle trees."
      },
      {
        "id": "b",
        "text": "No response (no penalty if only option answered)."
      },
      {
        "id": "c",
        "text": "Availability is ensured using vector-clocks with sizes adapted to update rates."
      },
      {
        "id": "d",
        "text": "Permanent faults are handled asynchronously with anti-entropy."
      },
      {
        "id": "e",
        "text": "Partitioning of data is decided using relaxed quorums for eventual consistency."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 20,
    "text": "In the context of a MapReduce deployment in Hadoop, what is the default size of\na split (the unit of input data given to a Mapper process) ? (select the option\nthat best fits the question).",
    "options": [
      {
        "id": "a",
        "text": "Size of HDFS blocks."
      },
      {
        "id": "b",
        "text": "Total input size divided by number of workers."
      },
      {
        "id": "c",
        "text": "Size of local file system blocks."
      },
      {
        "id": "d",
        "text": "Average size of files in the input."
      },
      {
        "id": "e",
        "text": "No response (no penalty if only option answered)."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "a"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 21,
    "text": "During the execution of a MapReduce job, what stage/phase performs sorting\nbefore providing results to following stages/phases? (select the option that\nbest fits the question).",
    "options": [
      {
        "id": "a",
        "text": "Shuffling."
      },
      {
        "id": "b",
        "text": "Splitting."
      },
      {
        "id": "c",
        "text": "Map."
      },
      {
        "id": "d",
        "text": "Reduce."
      },
      {
        "id": "e",
        "text": "<strong><strong>No response (no penalty)</strong>.</strong>"
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "a"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 22,
    "text": "A supervising authority is in charge of monitoring pollution generated in road\nsections across a region (based on the traffic and estimated CO2 emissions).\nConsider that only vehicles with combustion engines actually generate CO2\nemissions, in this scenario.\n\nFor instance, the supervising authority wants to determine whether a specific\nroad section should be subject to traffic reduction measures if the pollution\ngenerated by the traffic is considered excessive, while taking into account any\nspecific environmental regulations applied to the road section.\n\nIn general, the authority wants to detect normal road sections where the\ngenerated pollution is considered very high, and regulated road sections (in\nvulnerable areas) where the pollution is considered high.\n\nTherefore, a road section is subject to be eligible to traffic reduction\nmeasures when: - it is a normal road and the total emissions from traffic are\nabove 50000. - it is a regulated road and the total emissions from traffic are\nabove 1000.\n\nThe input consists of two text files.\n\nIn the first one, roads.txt, each line stores the information of one road\nsection: , <length_kms>,  where type may be NORMAL or REGULATED, according to\nroad section environmental vulnerability.\n\nThe second one, trips.txt, contains all the trips for the period under analysis.\nEach line stores one complete trip, alongside with the information about the\nvehicle that was used. , , <power_kw>, <roadID_1>, ..., <roadID_N> where engine\nmay be ELECTRIC or COMBUSTION, and power_kw is the engine power.\n\nFor simplicity, consider that the emissions generated by a vehicle travelling in\neach road section, when appropriate, are the product/multiplication of the\nengine power (power_kw) and the road section length (length_kms).\n\nAssume the standard signature for the mapper: List<k2,v2> map(string, int,\nstring) and reducer: List<k3, v3> reduce(k2, List) functions, where map has\ninput (filename, cursor/line number, and text line content) and k2, v2, k3 and\nv3 can all be replaced with types of your choice.\n\nWrite the pseudocode for a MapReduce application, with a single map and a single\nreduce method.\n\nThe final output of the reduce function should produce, if adequate, a single\nrecord for each road section where the supervising authority should analyze\nfurther traffic reduction, identifying the road section, the emissions limit,\nand the actual total emissions for that road section.\n\n(if you need, you can briefly state any assumptions at the end of the answer\nafter the pseudocode).",
    "options": [],
    "is_multi": false,
    "correct_ids": [],
    "fill_in_blanks": [],
    "distractors": [],
    "is_open_text": true,
    "solution_sketch": "Mapper:\n\n  - The first element of the solution is determining the key for the mapper and\n    reducer.\n  - It should be the route section IDs (roadID) in each of the files as it is\n    the only one that allows to cross-reference the information about each road\n    in the two files (in essence, a join between the relevant information in two\n    tables). (This allows the reduce function to receive and process all tuples\n    sharing (i.e. concerning) the same section regardless of their additional\n    information or file provenance. Only this will allow summing the powers of\n    cars that drove through each road section, to calculate the total emissions\n    based on total power and each specific road section length, and finally to\n    determine (based on each road type emissions limit) whether a specific\n    record for further analysis of the road should be emitted. Mappers cannot\n    access external information besides function input. Mappers cannot process\n    the entirety of the two files and keep temporary information about all of\n    them, as this is un-scalable and unfeasible. There is no other way for the\n    reducer to retrieve information regarding a given road or trip besides the\n    arguments of the reduce function receives, i.e., no access to external\n    storage, global hash-table with info of all roads, trips, etc.). The mapper\n    will emit two types of tuples (that can be lists with a discriminating\n    field/element), as it is also done in PageRank emitting page rank fragments,\n    and list of page links, using URL as key:\n  - i) once for each road section, outputting the road specific information of\n    length and type;\n  - ii) zero, one, or many for each road section transversed during each trip,\n    using each roadID as the key, outputting the power of the car that performed\n    the trip if, and only if, it is not an electric car (that do not have\n    emissions).\n\nMapper (path i) \u2013 roads.txt database) \u2013 - When the file argument is roads.txt:\n(this means we are reading from the roads database and we can get this from the\nkey in the mapper)\n\n  - Mapper should output with key routeID and include length and type of road\n    explicitly in the tuple so that it enables the reducer to interpret it\n    correctly, in any circumstances, without resorting to special cases where\n    only one of the fields can make sense.\n  - E.g.\n\n      if (file is roads.txt) {\n            output(line[0], (ROADS, line[1], line[2]);\n      }\n\nMapper (path ii) \u2013 trips.txt database) \u2013 - When the file argument is trips.txt:\n(this means we are reading from the trips database.)\n\n  - Mapper should iterate the route IDs in the line/list (i.e., line[3] ->\n    line[line.length-1]) and output, for each one, the routeID and the power of\n    the car that transversed the road section, only if it is not electric. Once\n    again, it must record explicitly the type of the tuple so that it enables\n    the reducer to interpret it correctly:\n\n      else if (file is trips.txt) {\n            if (line[1]==COMBUSTION){\n                  for (i= 3; i < line.length; i++) {\n                        output(line[i], TRIPS, line[2];\n                  }\n            }\n      }\n\nReducer:\n\n  - At the reducer function, the key is the roadID, and the tuples carry the\n    type information in the first field (v[0]) about ROADS or TRIPS, so that\n    they can processed accordingly. Each execution of the reducer function\n    processes all records with a given roadID outputted by the mappers, and only\n    those.\n  - the road section should be further analyzed if the total emissions are above\n    the limit for the road type.\n\n      int regulated = 0;\n      float length = 0;\n      float total_power = 0;\n      float total_emissions = 0;\n      foreach (v in values) {\n            if (v[0] == ROADS {\n                  length = v[1];\n                  regulated = v[2];\n            } else {\n                  total_power += v[1];\n            }\n      }\n      total_emissions = total_power * length;\n      if (regulated == REGULATED && total_emissions > 1000)\n            output( key, 1000, total_emissions);\n      else if (regulated == NORMAL && total_emissions > 50000)\n            output( key, 50000, total_emissions);\n\nNote: There is only one map and reduce function. The map can receive splits with\n(sets of) lines from any of the two giant files. I considered your\ninterpretations when deciding about each file, or simply having a code path to\nhandle \u201cfile1\u201d and another code path to handle \u201cfile2\u201d, etc. Typical errors:\n\n  - wrong key selection.\n  - incorrect filtering of data (not at the mapper)\n  - assuming roads and trips are present both in all tuples.\n  - accessing files or external information in the reduce function.\n  - wrong decision criteria in conditions/ifs.\n  - Iterating over input files in mapper repeatedly/recursively or iterating\n    tuple in reducer more than once.\n  - too generic code or English text."
  },
  {
    "number": 23,
    "text": "When comparing Spark against MapReduce, identify Spark's features that are\nspecifically advantageous when compared to MapReduce? (select all the correct\noptions).",
    "options": [
      {
        "id": "a",
        "text": "Spark allows processing large amounts of input, while Map Reduce does not."
      },
      {
        "id": "b",
        "text": "Spark has special support for the reuse (e.g., iterative, interactive) of working sets, while Map Reduce does not."
      },
      {
        "id": "c",
        "text": "Spark provides automatic fault-tolerance, while Map Reduce does not."
      },
      {
        "id": "d",
        "text": "Spark allows in-memory processing, while Map Reduce does not."
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "b",
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 24,
    "text": "Consider a stream processing scenario where messages published in a forum (e.g.\ntweets, posts) are continuously monitored in order to detect the topics that are\ntrending (e.g., Top-100 ranking of references in messages), considering the\nnumber of times they are referenced across messages over time.\n\nAnalyze how the window and event handling of Flink and Spark Streaming may\ncontribute to detect the potentially trending topics in a timely manner (so that\nusers may be advised quickly of a potential emerging trending topic, and\nincrease their chances of publishing a message on it as soon as it starts\ntrending).\n\nHow could developers detect potentially trending topics in a timely manner as\nthey emerge? (select all the correct options).",
    "options": [
      {
        "id": "a",
        "text": "Spark Streaming can be set up to manage a sliding window with 200 seconds of length and 5 second of sliding interval."
      },
      {
        "id": "b",
        "text": "Flink can be set up to manage a sliding window of 200 seconds of length and 1 second of sliding interval, and that is event-time based, i.e., to take into account the exact time each message was published."
      },
      {
        "id": "c",
        "text": "Flink can be set up to manage a sliding window with 25 seconds of length and 1 second of sliding interval."
      },
      {
        "id": "d",
        "text": "Spark Streaming can be set up to manage a tumbling window of 10 seconds of length."
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "c",
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 25,
    "text": "In a cloud data center facility the total energy consumption is 2400 kW and the\nenergy delivered to computing equipment is 1200 kW. What is the PUE (power usage\neffectiveness) of this facility?\n\n(select the option that best fits the question).",
    "options": [
      {
        "id": "a",
        "text": "24.0"
      },
      {
        "id": "b",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "c",
        "text": "2.00"
      },
      {
        "id": "d",
        "text": "1.20"
      },
      {
        "id": "e",
        "text": "0.20"
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "c"
    ],
    "fill_in_blanks": [],
    "distractors": []
  }
];
