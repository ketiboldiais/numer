from django.urls import path
from . import views

app_name = 'numerc'
urlpatterns = [
	path("", views.index, name="index"),

# Computer Architecture paths
	path("arch_preface", views.arch_preface, name="arch_preface"),
	path("arch_logic", views.arch_logic, name="arch_logic"),
	
# Python paths
	path("py_arithmeticOperators", views.py_arithmeticOperators, name="py_arithmeticOperators"),
	path("py_preface", views.py_preface, name="py_preface"),
	path("py_computability", views.py_computability, name="py_computability"),
	path("py_programs", views.py_programs, name="py_programs"),
	path("py_libraryImport", views.py_libraryImport, name="py_libraryImport"),
	path("py_objects", views.py_objects, name="py_objects"),
	path("py_typeConvert", views.py_typeConvert, name="py_typeConvert"),
	path("py_variables", views.py_variables, name="py_variables"),
	path("py_comparisonOperators", views.py_comparisonOperators, name="py_comparisonOperators"),
	path("py_booleanOperators", views.py_booleanOperators, name="py_booleanOperators"),
	path("py_branchingPrograms", views.py_branchingPrograms, name="py_branchingPrograms"),
	path("py_strings", views.py_strings, name="py_strings"),
	path("py_io", views.py_io, name="py_io"),
	path("py_loops", views.py_loops, name="py_loops"),
	path("py_bisectionSearch", views.py_bisectionSearch, name="py_bisectionSearch"),
	path("py_floatsFractions", views.py_floatsFractions, name="py_floatsFractions"),
	path("py_newtonRaphson", views.py_newtonRaphson, name="py_newtonRaphson"),
	path("py_decomposition", views.py_decomposition, name="py_decomposition"),
	path("py_functions", views.py_functions, name="py_functions"),
	path("py_controlFlow", views.py_controlFlow, name="py_controlFlow"),
	path("py_keywordArguments", views.py_keywordArguments, name="py_keywordArguments"),
	path("py_specifications", views.py_specifications, name="py_specifications"),
	path("py_recursion", views.py_recursion, name="py_recursion"),
	path("py_files", views.py_recursion, name="py_files"),
	path("py_structuredTypes", views.py_structuredTypes, name="py_structuredTypes"),
	path("py_tuples", views.py_tuples, name="py_tuples"),
	path("py_lists", views.py_lists, name="py_lists"),
	path("py_mutability", views.py_mutability, name="py_mutability"),
	path("py_functionObjects", views.py_functionObjects, name="py_functionObjects"),
	path("py_dictionaries", views.py_dictionaries, name="py_dictionaries"),
	path("py_tests", views.py_tests, name="py_tests"),
	path("py_exceptionsAssertions", views.py_exceptionsAssertions, name="py_exceptionsAssertions"),
	path("py_bugs", views.py_bugs, name="py_bugs"),
	path("py_oop", views.py_oop, name="py_oop"),
	path("py_classes", views.py_classes, name="py_classes"),
	path("py_sets", views.py_sets, name="py_sets"),
	path("py_hierarchies", views.py_hierarchies, name="py_hierarchies"),
	path("py_classVariables", views.py_classVariables, name="py_classVariables"),

	# Swift paths
	path("swift_preface", views.swift_preface, name="swift_preface"),
	path("swift_firstFiles", views.swift_firstFiles, name="swift_firstFiles"),
	path("swift_stacks", views.swift_stacks, name="swift_stacks"),
	path("swift_basicConstructs", views.swift_basicConstructs, name="swift_basicConstructs"),
	path("swift_statements", views.swift_statements, name="swift_statements"),
	path("swift_comments", views.swift_comments, name="swift_comments"),
	path("swift_variables", views.swift_variables, name="swift_variables"),
	path("swift_baseTypes", views.swift_baseTypes, name="swift_baseTypes"),
	path("swift_booleanOperators", views.swift_booleanOperators, name="swift_booleanOperators"),
	path("swift_optionals", views.swift_optionals, name="swift_optionals"),
	path("swift_tuples", views.swift_tuples, name="swift_tuples"),
	path("swift_arrays", views.swift_arrays, name="swift_arrays"),
	path("swift_namedTypes", views.swift_namedTypes, name="swift_namedTypes"),
	path("swift_functions", views.swift_functions, name="swift_functions"),
	path("swift_overloading", views.swift_overloading, name="swift_overloading"),
	path("swift_variadicParameters", views.swift_variadicParameters, name="swift_variadicParameters"),
	path("swift_inoutParameters", views.swift_inoutParameters, name="swift_inoutParameters"),
	path("swift_closures", views.swift_closures, name="swift_closures"),
	path("swift_forEach", views.swift_closures, name="swift_forEach"),
	path("swift_filter", views.swift_closures, name="swift_filter"),
	path("swift_reduce", views.swift_reduce, name="swift_reduce"),
	path("swift_sort", views.swift_sort, name="swift_sort"),
	path("swift_structs", views.swift_sort, name="swift_structs"),
	path("swift_properties", views.swift_properties, name="swift_properties"),
	path("swift_classes", views.swift_classes, name="swift_classes"),
	path("swift_enums", views.swift_enums, name="swift_enums"),
	path("swift_methods", views.swift_methods, name="swift_methods"),
	path("swift_switch", views.swift_switch, name="swift_switch"),
	path("swift_protocolsAndInheritance", views.swift_protocolsAndInheritance, name="swift_protocolsAndInheritance"),
	path("swift_override", views.swift_override, name="swift_override"),
	path("swift_init", views.swift_init, name="swift_init"),
	path("swift_standardLibrary", views.swift_standardLibrary, name="swift_standardLibrary"),
	path("swift_sets", views.swift_sets, name="swift_sets"),
	path("swift_conditionals", views.swift_conditionals, name="swift_conditionals"),
	path("swift_views", views.swift_views, name="swift_views"),
	path("swift_loops", views.swift_loops, name="swift_loops"),
	path("swift_stateAndSwiftUI", views.swift_stateAndSwiftUI, name="swift_stateAndSwiftUI"),
	path("swift_programArchitecture", views.swift_programArchitecture, name="swift_programArchitecture"),
	path("swift_xcodeShortcuts", views.swift_xcodeShortcuts, name="swift_xcodeShortcuts"),
	path("swift_mvvm", views.swift_mvvm, name="swift_mvvm"),

	# java paths
	path("java_preface", views.java_preface, name="java_preface"),
	path("java_typesAndVariables", views.java_typesAndVariables, name="java_typesAndVariables"),
	path("java_conditionals", views.java_conditionals, name="java_conditionals"),
	path("java_variableScope", views.java_variableScope, name="java_variableScope"),
	path("java_arrays", views.java_arrays, name="java_arrays"),
	path("java_loops", views.java_loops, name="java_loops"),
	path("java_algorithms", views.java_algorithms, name="java_algorithms"),
	path("java_consolePrograms", views.java_consolePrograms, name="java_consolePrograms"),
	path("java_functions", views.java_functions, name="java_functions"),
	path("java_strings", views.java_strings, name="java_strings"),
	path("java_overloading", views.java_overloading, name="java_overloading"),
	path("java_multidimensional", views.java_multidimensional, name="java_multidimensional"),
	path("java_compilation", views.java_compilation, name="java_compilation"),
	path("java_objects", views.java_objects, name="java_objects"),
	path("java_constructors", views.java_constructors, name="java_constructors"),
	path("java_gettersSetters", views.java_gettersSetters, name="java_gettersSetters"),
	path("java_inheritance", views.java_inheritance, name="java_inheritance"),
	path("java_fileProcessing", views.java_fileProcessing, name="java_fileProcessing"),
	path("java_polymorphism", views.java_polymorphism, name="java_polymorphism"),
	path("java_objectReferences", views.java_objectReferences, name="java_objectReferences"),
	path("java_interfaces", views.java_interfaces, name="java_interfaces"),
	path("java_dataStructuresAndAlgorithms", views.java_dataStructuresAndAlgorithms, name="java_dataStructuresAndAlgorithms"),

	# js paths 
	path("js_preface", views.js_preface, name="js_preface"),
	path("js_syntaxParsers", views.js_syntaxParsers, name="js_syntaxParsers"),
	path("js_lexicalEnvironments", views.js_lexicalEnvironments, name="js_lexicalEnvironments"),
	path("js_executionContexts", views.js_executionContexts, name="js_executionContexts"),
	path("js_variables", views.js_variables, name="js_variables"),
	path("js_mathObject", views.js_mathObject, name="js_mathObject"),
	path("js_regex", views.js_regex, name="js_regex"),
	path("js_baseTypes", views.js_baseTypes, name="js_baseTypes"),
	path("js_booleanOperators", views.js_booleanOperators, name="js_booleanOperators"),
	path("js_conditionalControl", views.js_conditionalControl, name="js_conditionalControl"),
	path("js_loops", views.js_loops, name="js_loops"),
	path("js_arrays", views.js_arrays, name="js_arrays"),
	path("js_objects", views.js_objects, name="js_objects"),
	path("js_functions", views.js_functions, name="js_functions"),
	path("js_methods", views.js_methods, name="js_methods"),
	path("js_this", views.js_this, name="js_this"),
	path("js_scope", views.js_scope, name="js_scope"),
	path("js_angular", views.js_angular, name="js_angular"),

	# Lisp paths
	path("lisp_preface", views.lisp_preface, name="lisp_preface"),
	path("lisp_expressions", views.lisp_expressions, name="lisp_expressions"),
	path("lisp_naming", views.lisp_naming, name="lisp_naming"),
	path("lisp_environment", views.lisp_environment, name="lisp_environment"),
	path("lisp_evaluatingCombinations", views.lisp_evaluatingCombinations, name="lisp_evaluatingCombinations"),
	path("lisp_strings", views.lisp_strings, name="lisp_strings"),
	path("lisp_images", views.lisp_images, name="lisp_images"),
	path("lisp_constants", views.lisp_constants, name="lisp_constants"),
	path("lisp_compoundProcedures", views.lisp_compoundProcedures, name="lisp_compoundProcedures"),
	path("lisp_substitutionModel", views.lisp_substitutionModel, name="lisp_substitutionModel"),
	path("lisp_applicativeNormal", views.lisp_applicativeNormal, name="lisp_applicativeNormal"),
	path("lisp_conditionals", views.lisp_conditionals, name="lisp_conditionals"),
	path("lisp_compoundPredicates", views.lisp_compoundPredicates, name="lisp_compoundPredicates"),
	path("lisp_lists", views.lisp_lists, name="lisp_lists"),
	path("lisp_listDataDefinitions", views.lisp_listDataDefinitions, name="lisp_listDataDefinitions"),
	path("lisp_newtonsMethod", views.lisp_newtonsMethod, name="lisp_newtonsMethod"),
	path("lisp_blockStructuring", views.lisp_blockStructuring, name="lisp_blockStructuring"),
	path("lisp_iteration", views.lisp_iteration, name="lisp_iteration"),
	path("lisp_treeRecursion", views.lisp_treeRecursion, name="lisp_treeRecursion"),
	path("lisp_ordersOfGrowth", views.lisp_ordersOfGrowth, name="lisp_ordersOfGrowth"),
	path("lisp_higherOrderFunctions", views.lisp_higherOrderFunctions, name="lisp_higherOrderFunctions"),
	path("lisp_designingFunctions", views.lisp_designingFunctions, name="lisp_designingFunctions"),
	path("lisp_designingData", views.lisp_designingData, name="lisp_designingData"),
	path("lisp_selfReference", views.lisp_selfReference, name="lisp_selfReference"),
	path("lisp_designingLargePrograms", views.lisp_designingLargePrograms, name="lisp_designingLargePrograms"),

	# ML paths
	path("ml_preface", views.ml_preface, name="ml_preface"),
	path("ml_simpleData", views.ml_simpleData, name="ml_simpleData"),
	path("ml_expressionsVariableBindings", views.ml_expressionVariableBindings, name="ml_expressionsVariableBindings"),
	path("ml_variableImmutability", views.ml_variableImmutability, name="ml_variableImmutability"),
	path("ml_logicalOperators", views.ml_logicalOperators, name="ml_logicalOperators"),
	path("ml_functionBindings", views.ml_functionBindings, name="ml_functionBindings"),
	path("ml_pairs", views.ml_pairs, name="ml_pairs"),
	path("ml_tuples", views.ml_tuples, name="ml_tuples"),
	path("ml_errors", views.ml_errors, name="ml_errors"),
	path("ml_customDataTypes", views.ml_customDataTypes, name="ml_customDataTypes"),

	# C++ paths
	path("cpp_preface", views.cpp_preface, name="cpp_preface"),
	path("cpp_errors", views.cpp_errors, name="cpp_errors"),
	path("cpp_variablesAndTypes", views.cpp_variablesAndTypes, name="cpp_variablesAndTypes"),
	path("cpp_basicOperators", views.cpp_basicOperators, name="cpp_basicOperators"),
	path("cpp_functions", views.cpp_functions, name="cpp_functions"),
	path("cpp_controlFlow", views.cpp_controlFlow, name="cpp_controlFlow"),
	path("cpp_preprocessor", views.cpp_preprocessor, name="cpp_preprocessor"),
	path("cpp_namespaces", views.cpp_namespaces, name="cpp_namespaces"),
	path("cpp_dataStructuresIntro", views.cpp_dataStructuresIntro, name="cpp_dataStructuresIntro"),
	path("cpp_algorithmIntro", views.cpp_algorithmIntro, name="cpp_algorithmIntro"),
	path("cpp_insertionSort", views.cpp_insertionSort, name="cpp_insertionSort"),
	path("cpp_mergeSort", views.cpp_mergeSort, name="cpp_mergeSort"),
	path("cpp_peakFinder", views.cpp_peakFinder, name="cpp_peakFinder"),
	path("cpp_hashing", views.cpp_hashing, name="cpp_hashing"),
	path("cpp_collections", views.cpp_collections, name="cpp_collections"),

	# Prolog Paths
	path("prolog_preface", views.prolog_preface, name="prolog_preface"),
	path("prolog_atoms", views.prolog_atoms, name="prolog_atoms"),

	# Haskell Paths
	path("haskell_intro", views.haskell_intro, name="haskell_intro"),
	path("haskell_lambdaCalculus", views.haskell_lambdaCalculus, name="haskell_lambdaCalculus"),
	path("haskell_variables", views.haskell_variables, name="haskell_variables"),

]




