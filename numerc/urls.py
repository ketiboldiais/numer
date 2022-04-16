from django.urls import path
from . import views

app_name = 'numerc'
urlpatterns = [
	path("", views.index, name="index"),

# Computer Architecture paths
	path("arch_preface", views.arch_preface, name="arch_preface"),
	path("arch_logic", views.arch_logic, name="arch_logic"),
	
# Python paths
	path("py_preface", views.py_preface, name="py_preface"),
	path("py_basics", views.py_basics, name="py_basics"),
	path("py_decomposition", views.py_decomposition, name="py_decomposition"),
	path("py_controlFlow", views.py_controlFlow, name="py_controlFlow"),
	path("py_structuredTypes", views.py_structuredTypes, name="py_structuredTypes"),
	path("py_tests", views.py_tests, name="py_tests"),
	path("py_oop", views.py_oop, name="py_oop"),

	# Swift paths
	path("swift_preface", views.swift_preface, name="swift_preface"),
	path("swift_firstFiles", views.swift_firstFiles, name="swift_firstFiles"),
	path("swift_stacks", views.swift_stacks, name="swift_stacks"),
	path("swift_basicConstructs", views.swift_basicConstructs, name="swift_basicConstructs"),
	path("swift_variables", views.swift_variables, name="swift_variables"),
	path("swift_baseTypes", views.swift_baseTypes, name="swift_baseTypes"),
	path("swift_optionals", views.swift_optionals, name="swift_optionals"),
	path("swift_tuples", views.swift_tuples, name="swift_tuples"),
	path("swift_arrays", views.swift_arrays, name="swift_arrays"),
	path("swift_namedTypes", views.swift_namedTypes, name="swift_namedTypes"),
	path("swift_functions", views.swift_functions, name="swift_functions"),
	path("swift_overloading", views.swift_overloading, name="swift_overloading"),
	path("swift_forEach", views.swift_forEach, name="swift_forEach"),
	path("swift_filter", views.swift_filter, name="swift_filter"),
	path("swift_structs", views.swift_structs, name="swift_structs"),
	path("swift_properties", views.swift_properties, name="swift_properties"),
	path("swift_classes", views.swift_classes, name="swift_classes"),
	path("swift_enums", views.swift_enums, name="swift_enums"),
	path("swift_methods", views.swift_methods, name="swift_methods"),
	path("swift_switch", views.swift_switch, name="swift_switch"),
	path("swift_protocolsAndInheritance", views.swift_protocolsAndInheritance, name="swift_protocolsAndInheritance"),
	path("swift_standardLibrary", views.swift_standardLibrary, name="swift_standardLibrary"),
	path("swift_sets", views.swift_sets, name="swift_sets"),
	path("swift_conditionals", views.swift_conditionals, name="swift_conditionals"),
	path("swift_views", views.swift_views, name="swift_views"),
	path("swift_loops", views.swift_loops, name="swift_loops"),
	path("swift_stateAndSwiftUI", views.swift_stateAndSwiftUI, name="swift_stateAndSwiftUI"),
	path("swift_programArchitecture", views.swift_programArchitecture, name="swift_programArchitecture"),
	path("swift_xcodeShortcuts", views.swift_xcodeShortcuts, name="swift_xcodeShortcuts"),
	path("swift_generics", views.swift_generics, name="swift_generics"),
	path("swift_designPatterns", views.swift_designPatterns, name="swift_designPatterns"),

	# java paths
	path("java_preface", views.java_preface, name="java_preface"),

	path("java_typesAndVariables", views.java_typesAndVariables, name="java_typesAndVariables"),

	path("java_conditionals", views.java_conditionals, name="java_conditionals"),

	path("java_variableScope", views.java_variableScope, name="java_variableScope"),

	path("java_arrays", views.java_arrays, name="java_arrays"),

	path("java_loops", views.java_loops, name="java_loops"),

	path("java_consolePrograms", views.java_consolePrograms, name="java_consolePrograms"),

	path("java_functions", views.java_functions, name="java_functions"),

	path("java_strings", views.java_strings, name="java_strings"),
	
	path("java_overloading", views.java_overloading, name="java_overloading"),

	path("java_multidimensional", views.java_multidimensional, name="java_multidimensional"),

	path("java_compilation", views.java_compilation, name="java_compilation"),

	path("java_objects", views.java_objects, name="java_objects"),

	path("java_fileProcessing", views.java_fileProcessing, name="java_fileProcessing"),

	path("java_dataStructuresAndAlgorithms", views.java_dataStructuresAndAlgorithms, name="java_dataStructuresAndAlgorithms"),

	path("java_design_patterns", views.java_design_patterns, name="java_design_patterns"),

	path("java_blockchain", views.java_blockchain, name="java_blockchain"),

	# js paths 
	path("js_preface", views.js_preface, name="js_preface"),

	path("js_howJSWorks", views.js_howJSWorks, name="js_howJSWorks"),

	path("js_regex", views.js_regex, name="js_regex"),

	path("js_baseTypes", views.js_baseTypes, name="js_baseTypes"),

	path("js_controlFlow", views.js_controlFlow, name="js_controlFlow"),

	path("js_arrays", views.js_arrays, name="js_arrays"),

	path("js_functions", views.js_functions, name="js_functions"),

	path("js_classes", views.js_classes, name="js_classes"),

	path("js_jsLowerLevel", views.js_jsLowerLevel, name="js_jsLowerLevel"),

	path("js_dom", views.js_dom, name="js_dom"),

	path("js_react", views.js_react, name="js_react"),

	path("js_angular", views.js_angular, name="js_angular"),

	path("js_dsalg", views.js_dsalg, name="js_dsalg"),

	path("js_d3", views.js_d3, name="js_d3"),

	path("js_threeJS", views.js_threeJS, name="js_threeJS"),

	path("js_node", views.js_node, name="js_node"),

	path("js_async", views.js_async, name="js_async"),

#! Lisp paths (lisp-paths)
	path("lisp_preface", views.lisp_preface, name="lisp_preface"),

	path("lisp_expressions", views.lisp_expressions, name="lisp_expressions"),

	path("lisp_lists", views.lisp_lists, name="lisp_lists"),

	path("lisp_onRecursion", views.lisp_onRecursion, name="lisp_onRecursion"),

	#! PL paths (pl-paths)
	path("pl_preface", views.pl_preface, name="pl_preface"),

	path("pl_briefHistory", views.pl_briefHistory, name="pl_briefHistory"),

	path("pl_overview", views.pl_overview, name="pl_overview"),

	path("pl_ast_interpreter", views.pl_ast_interpreter, name="pl_ast_interpreter"),


	#! ML Paths (ml-paths)
	path("ml_preface", views.ml_preface, name="ml_preface"),

	path("ml_simpleData", views.ml_simpleData, name="ml_simpleData"),

	path("ml_customDataTypes", views.ml_customDataTypes, name="ml_customDataTypes"),
	
	path("ml_functions", views.ml_functions, name="ml_functions"),

	path("ml_typeInference", views.ml_typeInference, name="ml_typeInference"),

	# C++ paths
	path("cpp_preface", views.cpp_preface, name="cpp_preface"),

	path("cpp_errors", views.cpp_errors, name="cpp_errors"),

	path("cpp_variablesAndTypes", views.cpp_variablesAndTypes, name="cpp_variablesAndTypes"),

	path("cpp_basicOperators", views.cpp_basicOperators, name="cpp_basicOperators"),

	path("cpp_functions", views.cpp_functions, name="cpp_functions"),

	path("cpp_controlFlow", views.cpp_controlFlow, name="cpp_controlFlow"),

	path("cpp_collections", views.cpp_collections, name="cpp_collections"),

	path("cpp_preprocessor", views.cpp_preprocessor, name="cpp_preprocessor"),

	path("cpp_namespaces", views.cpp_namespaces, name="cpp_namespaces"),

	path("cpp_dataStructuresIntro", views.cpp_dataStructuresIntro, name="cpp_dataStructuresIntro"),

	path("cpp_insertionSort", views.cpp_insertionSort, name="cpp_insertionSort"),

	path("cpp_mergeSort", views.cpp_mergeSort, name="cpp_mergeSort"),

	path("cpp_peakFinder", views.cpp_peakFinder, name="cpp_peakFinder"),

	path("cpp_hashing", views.cpp_hashing, name="cpp_hashing"),

	path("cpp_pointers", views.cpp_pointers, name="cpp_pointers"),

	path("cpp_sorting", views.cpp_sorting, name="cpp_sorting"),

	path("cpp_sequences", views.cpp_sequences, name="cpp_sequences"),

	path("cpp_oop", views.cpp_oop, name="cpp_oop"),

	path("cpp_fileIO", views.cpp_fileIO, name="cpp_fileIO"),

	path("cpp_templates", views.cpp_templates, name="cpp_templates"),

	path("cpp_overloading", views.cpp_overloading, name="cpp_overloading"),

	path("cpp_matrices", views.cpp_matrices, name="cpp_matrices"),

	path("cpp_algorithmicAnalysis", views.cpp_algorithmicAnalysis, name="cpp_algorithmicAnalysis"),

	path("cpp_numberTheoryCS", views.cpp_numberTheoryCS, name="cpp_numberTheoryCS"),

	path("cpp_stringAlgorithms", views.cpp_stringAlgorithms, name="cpp_stringAlgorithms"),

	path("cpp_linked_list", views.cpp_linked_list, name="cpp_linked_list"),

	path("cpp_circular_linked_lists", views.cpp_circular_linked_lists, name="cpp_circular_linked_lists"),

	path("cpp_doubly_linked_list", views.cpp_doubly_linked_list, name="cpp_doubly_linked_list"),

	path("cpp_stack", views.cpp_stack, name="cpp_stack"),

	path("cpp_queue", views.cpp_queue, name="cpp_queue"),

	path("cpp_tree_theory", views.cpp_tree_theory, name="cpp_tree_theory"),

	path("cpp_binary_trees", views.cpp_binary_trees, name="cpp_binary_trees"),

	path("cpp_hashTables", views.cpp_hashTables, name="cpp_hashTables"),

	path("cpp_graph_algorithms", views.cpp_graph_algorithms, name="cpp_graph_algorithms"),

	path("cpp_generics", views.cpp_generics, name="cpp_generics"),

	path("cpp_avl_trees", views.cpp_avl_trees, name="cpp_avl_trees"),

	path("cpp_patterns", views.cpp_patterns, name="cpp_patterns"),

	path("cpp_search", views.cpp_search, name="cpp_search"),

	path("cpp_recursion", views.cpp_recursion, name="cpp_recursion"),

	path("cpp_cryptography", views.cpp_cryptography, name="cpp_cryptography"),



	# C# paths
	path("csh_preface", views.csh_preface, name="csh_preface"),

	# Prolog Paths
	path("prolog_preface", views.prolog_preface, name="prolog_preface"),
	path("prolog_atoms", views.prolog_atoms, name="prolog_atoms"),

	# Haskell Paths
	path("haskell_intro", views.haskell_intro, name="haskell_intro"),

	path("haskell_lambdaCalculus", views.haskell_lambdaCalculus, name="haskell_lambdaCalculus"),

	path("haskell_gettingStarted", views.haskell_gettingStarted, name="haskell_gettingStarted"),

	path("haskell_variables", views.haskell_variables, name="haskell_variables"),

	# Ruby paths
	path("ruby_intro", views.ruby_intro, name="ruby_intro"),

	# Compilers Paths
	path("cmp_index", views.cmp_index, name="cmp_index"),

	# Computer Systems Paths
	path("sys_index", views.sys_index, name="sys_index"),

	path("sys_assembly", views.sys_assembly, name="sys_assembly"),

	path("sys_cIntro", views.sys_cIntro, name="sys_cIntro"),

	path("sys_rustIntro", views.sys_rustIntro, name="sys_rustIntro"),

	path("sys_hardware", views.sys_hardware, name="sys_hardware"),

	path("sys_os", views.sys_os, name="sys_os"),

	path("sys_pointers", views.sys_pointers, name="sys_pointers"),

	path("sys_design", views.sys_design, name="sys_design"),

	path("sys_devOps", views.sys_devOps, name="sys_devOps"),

	# Software Design
	path("des_index", views.des_index, name="des_index"),

	path("des_naming", views.des_naming, name="des_naming"),

	path("des_functions", views.des_functions, name="des_functions"),

	path("des_classes", views.des_classes, name="des_classes"),

	path("des_git", views.des_git, name="des_git"),

	path("des_shell", views.des_shell, name="des_shell"),

	path("des_regex", views.des_regex, name="des_regex"),

	path("des_orchestration", views.des_orchestration, name="des_orchestration"),

	path("des_licensing", views.des_licensing, name="des_licensing"),

]




