
window.examConfig = {
    title: "CNV-25-26 Sample Exam",
    timeLimit: 80
};

window.examData = [
    {
        "number": 2,
        "text": "In the context of Cloud Computing, identify the available deployment models for a cloud.\n\n<strong>(select all the correct options)</strong>",
        "is_multi": true,
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
        "correct_ids": [
            "a",
            "c"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "Public cloud., Hybrid cloud."
    },
    {
        "number": 3,
        "text": "In the context of binary translation, during emulation, the Emulation Manager (EM) performs look-ups using a Map Table to determine what code to emulate or execute next.\n\nIdentify the values that are involved in this look-up.\n\n<strong>(select all the correct options)</strong>",
        "is_multi": true,
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
        "correct_ids": [
            "a",
            "b"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "Source Program Counter (SPC)., Target Program Counter (TPC)."
    },
    {
        "number": 4,
        "text": "In processor virtualization (System VMs), Theorem 1 addresses ( \\_\\_\\_\\_ ) VMM construction.\n\nFrom that theorem we can conclude the following:\n\n- the set of privileged instructions for that computer needs to be \\_\\_\\_\\_ the set of sensitive instructions.\n- there can be any number of \\_\\_\\_\\_ instructions.\n- there must not be any \\_\\_\\_\\_ instructions.\n\n<strong>(no penalty for wrong answers)</strong>",
        "is_multi": false,
        "options": [],
        "correct_ids": [],
        "fill_in_blanks": [
            "efficient",
            "equal to or a superset of",
            "innocuous",
            "critical"
        ],
        "distractors": [
            "equal to or a subset of",
            "non-critical",
            "virtual",
            "user-level",
            "inefficient",
            "dangerous"
        ],
        "explanation": "In processor virtualization (System VMs), Theorem 1 addresses ([efficient]) VMM construction.\n- the set of privileged instructions for that computer needs to be [equal to or a superset of] the set of sensitive instructions.\n- there can be any number of [innocuous] instructions.\n- there must not be any [critical] instructions."
    },
    {
        "number": 5,
        "text": "What mappings of page addresses are employed in Memory Virtualization carried out by system VMs?\n\n<strong>(select all the correct options)</strong>",
        "is_multi": true,
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
        "correct_ids": [
            "b",
            "c"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "virtual addresses to real addresses., real addresses to physical addresses."
    },
    {
        "number": 6,
        "text": "When deploying instances in Amazon Web Services (AWS), the user can make selections based on geographical and fault-tolerance criteria.\n\nWhat are they?\n\n<strong>(select the option that best fits the question)</strong>",
        "is_multi": false,
        "options": [
            {
                "id": "a",
                "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
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
        "correct_ids": [
            "c"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "Regions and Availability Zones."
    },
    {
        "number": 7,
        "text": "When deploying workloads in the cloud, there is a sharing of responsibilities between the user and the cloud service provider (CSP), in the context of a service-level agreement (SLA).\n\nWhat is the correct assessment, when a given problem arises, considering the sharing of responsibilities is used to determine who (user, CSP) should correct the situation?\n\n<strong>(select the option that best fits the question)</strong>",
        "is_multi": false,
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
        "correct_ids": [
            "b"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "In IaaS and PaaS, when there is a hardware failure, the CSP is responsible for correcting the situation."
    },
    {
        "number": 8,
        "text": "Nova Scheduler is the component in OpenStack that is responsible for launching instances (virtual servers) and deciding in what physical machines (hosts, nodes) they should be launched.\n\nThe built-in scheduler is the Filter Scheduler. It is parametrizable and operates in phases: i) gathering state of all compute nodes; ii) finding suitable hosts; iii) choosing the best nodes.\n\nConsider a scenario where the developer wants to launch a VM instance that requires:\n- 4 VCPUs and\n- 4 GB of memory\n\nFurthermore, he/she wants to:\n- employ a balancing policy (i.e. attempt at making the new VM instance to run on one of the least loaded nodes, so as to balance the load overall).\n- give priority to free memory over available CPU when selecting hosts.\n\nHow can the custom filters and weights of this algorithm be parametrized/configured in order to achieve these goals?\n\n<strong>(select the option that best fits the question)</strong>",
        "is_multi": false,
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
                "text": "<strong><strong>No response (no penalty)</strong>.</strong>"
            },
            {
                "id": "e",
                "text": "Use filters (vcpus_total >= 4; free_ram_mb >= 4096), use weights (RAMWeigher = -2; CPUWeigher= -1)."
            }
        ],
        "correct_ids": [
            "a"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "Use filters (vcpus_total >= 4; free_ram_mb >= 4096), use weights (RAMWeigher = 2; CPUWeigher= 1)."
    },
    {
        "number": 9,
        "text": "The interaction of AWS instances with other AWS instances and with the outside world needs to be monitored and allowed only when that is intended by the application developers/administrators.\n\nHow is this carried out in AWS?\n\n<strong>(select all the correct options)</strong>",
        "is_multi": true,
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
        "correct_ids": [
            "b",
            "d"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "Security groups can be added to or removed from each AWS instance., Developers/administrators can use IP rules to specify protocol and destination port of accepted traffic."
    },
    {
        "number": 10,
        "text": "What sequence of byte-code could illustrate the invocation of an instance method (receiving two integer arguments) on the current object's context?\n\n<strong>(select the option that best fits the question)</strong>",
        "is_multi": false,
        "options": [
            {
                "id": "a",
                "text": "iload_1 / iload_2 / aload_0 / invokevirtual #4"
            },
            {
                "id": "b",
                "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
            },
            {
                "id": "c",
                "text": "iload_1 / iload_2 / invokevirtual #1"
            },
            {
                "id": "d",
                "text": "aload_0 / dup / iload_2 / iload_1 / invokespecial #7"
            },
            {
                "id": "e",
                "text": "aload_0 / ldc #3 / iload_1 / invokevirtual #1"
            }
        ],
        "correct_ids": [
            "e"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "aload_0\nldc #3\niload_1\ninvokevirtual #1"
    },
    {
        "number": 11,
        "text": "Consider the typical deployment of the algorithm Generational GC in how it organizes the heap, how it identifies and preserves reachable (live) objects, and detects and reclaims garbage objects to free up memory for the application.\n\nWhat are the key specific feature(s) of this GC algorithm when compared to other algorithms?\n\n<strong>(select the option that best fits the question)</strong>",
        "is_multi": false,
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
                "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
            }
        ],
        "correct_ids": [
            "c"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "It divides the heap in two zones and wastes half of memory in one of these zones."
    },
    {
        "number": 14,
        "text": "When deploying an application on the Google App Engine (GAE) PaaS, how does the GAE achieve scalability, i.e. by adhering to what specific behavior?\n\n<strong>(select the option that best fits the question)</strong>",
        "is_multi": false,
        "options": [
            {
                "id": "a",
                "text": "Web apps are permanently kept in memory."
            },
            {
                "id": "b",
                "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
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
        "correct_ids": [
            "c"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "Requests are sent to the servers where the application is already running."
    },
    {
        "number": 15,
        "text": "Function-as-a-Service (FaaS) aims to improve on the delivery model provided by Infrastructure-as-a-Service (IaaS).\n\nOne such example is AWS Lambda that follows a specific pricing model.\n\nIdentify the specific aspects that are considered when charging the user for the actual resource utilization of a function over a given period of time, when compared to AWS EC2.\n\n<strong>(select all the correct options)</strong>",
        "is_multi": true,
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
        "correct_ids": [
            "c",
            "d"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "Number of function invocations., Memory reserved for the function."
    },
    {
        "number": 16,
        "text": "Function-as-a-Service (FaaS) brings to programmers significant advantages.\n\nNonetheless, cold starts resulting from VM/container and runtime startup introduce significant latency penalties in short invocations.\n\nWhat approaches can the providers implement to address cold starts and make them less frequent?\n\n<strong>(select all the correct options)</strong>",
        "is_multi": true,
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
                "text": "Functions could be compiled and initialized ahead of time."
            }
        ],
        "correct_ids": [
            "a",
            "b",
            "d"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "Functions could reuse already started execution environments., Functions could be compiled and initialized ahead of time., Providers could execute concurrently several lambdas in the same runtime."
    },
    {
        "number": 17,
        "text": "The architecture of the Google File System/Hadoop File System (GFS/HDFS) is tuned/optimized for specific operation scenarios.\n\nFrom the following, what is the type of operation that GFS/HDFS was specially designed to support?\n\n<strong>(select the option that best fits the question)</strong>",
        "is_multi": false,
        "options": [
            {
                "id": "a",
                "text": "Sequential overwrite access to very large files."
            },
            {
                "id": "b",
                "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
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
        "correct_ids": [
            "d"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "Sequential read access to very large files."
    },
    {
        "number": 18,
        "text": "In BigTable, the master is a single process that performs top-level coordination for the entire cluster.\n\nAlthough this may potentially incur in a bottleneck, BigTable frees the master from substantial coordination effort because of an important design decision.\n\nWhich one is the most relevant?\n\n<strong>(select the option that best fits the question)</strong>",
        "is_multi": false,
        "options": [
            {
                "id": "a",
                "text": "BigTable uses metadata tablets to organize partitioning."
            },
            {
                "id": "b",
                "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
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
        "correct_ids": [
            "a"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "BigTable uses metadata tablets to organize partitioning."
    },
    {
        "number": 19,
        "text": "Considering the cloud storage Dynamo from Amazon, identify a specific key design decision, adopted by Dynamo creators.\n\n<strong>(select the option that best fits the question)</strong>",
        "is_multi": false,
        "options": [
            {
                "id": "a",
                "text": "Membership information is managed using Merkle trees."
            },
            {
                "id": "b",
                "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
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
        "correct_ids": [
            "d"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "Permanent faults are handled asynchronously with anti-entropy."
    },
    {
        "number": 20,
        "text": "In the context of a MapReduce deployment in Hadoop, what is the default size of a *split* (the unit of input data given to a Mapper process)?\n\n<strong>(select the option that best fits the question)</strong>",
        "is_multi": false,
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
                "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
            }
        ],
        "correct_ids": [
            "a"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "Size of HDFS blocks."
    },
    {
        "number": 21,
        "text": "During the execution of a MapReduce job, what stage/phase performs sorting before providing results to following stages/phases?\n\n<strong>(select the option that best fits the question)</strong>",
        "is_multi": false,
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
        "correct_ids": [
            "a"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "Shuffling."
    },
    {
        "number": 23,
        "text": "When comparing Spark against MapReduce, identify Spark's features that are specifically advantageous when compared to MapReduce?\n\n<strong>(select all the correct options)</strong>",
        "is_multi": true,
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
        "correct_ids": [
            "b",
            "d"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "Spark has special support for the reuse (e.g., iterative, interactive) of working sets, while Map Reduce does not., Spark allows in-memory processing, while Map Reduce does not."
    },
    {
        "number": 24,
        "text": "Consider a stream processing scenario where messages published in a forum (e.g. tweets, posts) are continuously monitored in order to detect the topics that are trending (e.g., Top-100 ranking of references in messages), considering the number of times they are referenced across messages over time.\n\nAnalyze how the window and event handling of Flink and Spark Streaming may contribute to detect the potentially trending topics in a timely manner (so that users may be advised quickly of a potential emerging trending topic, and increase their chances of publishing a message on it as soon as it starts trending).\n\nHow could developers detect potentially trending topics in a timely manner as they emerge?\n\n<strong>(select all the correct options)</strong>",
        "is_multi": true,
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
        "correct_ids": [
            "c",
            "d"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "Spark Streaming can be set up to manage a tumbling window of 10 seconds of length., Flink can be set up to manage a sliding window with 25 seconds of length and 1 second of sliding interval."
    },
    {
        "number": 25,
        "text": "In a cloud data center facility the total energy consumption is 2400 kW and the energy delivered to computing equipment is 1200 kW.\n\nWhat is the PUE (power usage effectiveness) of this facility?\n\n<strong>(select the option that best fits the question)</strong>",
        "is_multi": false,
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
        "correct_ids": [
            "c"
        ],
        "fill_in_blanks": [],
        "distractors": [],
        "explanation": "2.00"
    }
];
