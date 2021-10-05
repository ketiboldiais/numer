from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
	return render(request, "numerc/index.html")

# Computer Architecture
def arch_preface(request):
	return render(request, "numerc/arch/arch_preface.html")
def arch_logic(request):
	return render(request, "numerc/arch/arch_logic.html")
	
# Python Views
def py_arithmeticOperators(request):
	return render(request, "numerc/py/py_arithmeticOperators.html")
def py_preface(request):
	return render(request, "numerc/py/py_preface.html")
def py_computability(request):
	return render(request, "numerc/py/py_computability.html")
def py_programs(request):
	return render(request, "numerc/py/py_programs.html")
def py_libraryImport(request):
	return render(request, "numerc/py/py_libraryImport.html")
def py_objects(request):
	return render(request, "numerc/py/py_objects.html")
def py_typeConvert(request):
	return render(request, "numerc/py/py_typeConvert.html")
def py_variables(request):
	return render(request, "numerc/py/py_variables.html")
def py_comparisonOperators(request):
	return render(request, "numerc/py/py_comparisonOperators.html")
def py_booleanOperators(request):
	return render(request, "numerc/py/py_booleanOperators.html")
def py_branchingPrograms(request):
	return render(request, "numerc/py/py_branchingPrograms.html")
def py_strings(request):
	return render(request, "numerc/py/py_strings.html")
def py_io(request):
	return render(request, "numerc/py/py_io.html")
def py_loops(request):
	return render(request, "numerc/py/py_loops.html")
def py_bisectionSearch(request):
	return render(request, "numerc/py/py_bisectionSearch.html")
def py_floatsFractions(request):
	return render(request, "numerc/py/py_floatsFractions.html")
def py_newtonRaphson(request):
	return render(request, "numerc/py/py_newtonRaphson.html")
def py_decomposition(request):
	return render(request, "numerc/py/py_decomposition.html")
def py_functions(request):
	return render(request, "numerc/py/py_functions.html")
def py_controlFlow(request):
	return render(request, "numerc/py/py_controlFlow.html")
def py_keywordArguments(request):
	return render(request, "numerc/py/py_keywordArguments.html")
def py_specifications(request):
	return render(request, "numerc/py/py_specifications.html")
def py_recursion(request):
	return render(request, "numerc/py/py_recursion.html")
def py_files(request):
	return render(request, "numerc/py/py_files.html")
def py_structuredTypes(request):
	return render(request, "numerc/py/py_structuredTypes.html")
def py_tuples(request):
	return render(request, "numerc/py/py_tuples.html")
def py_lists(request):
	return render(request, "numerc/py/py_lists.html")
def py_mutability(request):
	return render(request, "numerc/py/py_mutability.html")
def py_functionObjects(request):
	return render(request, "numerc/py/py_functionsObjects.html")
def py_dictionaries(request):
	return render(request, "numerc/py/py_dictionaries.html")
def py_tests(request):
	return render(request, "numerc/py/py_tests.html")
def py_bugs(request):
	return render(request, "numerc/py/py_bugs.html")
def py_exceptionsAssertions(request):
	return render(request, "numerc/py/py_exceptionsAssertions.html")
def py_oop(request):
	return render(request, "numerc/py/py_oop.html")
def py_classes(request):
	return render(request, "numerc/py/py_classes.html")
def py_sets(request):
	return render(request, "numerc/py/py_sets.html")
def py_oopBenefits(request):
	return render(request, "numerc/py/py_oopBenefits.html")
def py_hierarchies(request):
	return render(request, "numerc/py/py_hierarchies.html")
def py_classVariables(request):
	return render(request, "numerc/py/py_classVariables.html")

# Swift functions
def swift_preface(request):
	return render(request, "numerc/swift/swift_preface.html")
def swift_firstFiles(request):
	return render(request, "numerc/swift/swift_firstFiles.html")
def swift_stacks(request):
	return render(request, "numerc/swift/swift_stacks.html")
def swift_basicConstructs(request):
	return render(request, "numerc/swift/swift_basicConstructs.html")
def swift_statements(request):
	return render(request, "numerc/swift/swift_statements.html")
def swift_comments(request):
	return render(request, "numerc/swift/swift_comments.html")
def swift_variables(request):
	return render(request, "numerc/swift/swift_variables.html")
def swift_baseTypes(request):
	return render(request, "numerc/swift/swift_baseTypes.html")
def swift_booleanOperators(request):
	return render(request, "numerc/swift/swift_booleanOperators.html")
def swift_optionals(request):
	return render(request, "numerc/swift/swift_optionals.html")
def swift_tuples(request):
	return render(request, "numerc/swift/swift_tuples.html")
def swift_arrays(request):
	return render(request, "numerc/swift/swift_arrays.html")
def swift_namedTypes(request):
	return render(request, "numerc/swift/swift_namedTypes.html")
def swift_functions(request):
	return render(request, "numerc/swift/swift_functions.html")
def swift_overloading(request):
	return render(request, "numerc/swift/swift_overloading.html")
def swift_variadicParameters(request):
	return render(request, "numerc/swift/swift_variadicParameters.html")
def swift_inoutParameters(request):
	return render(request, "numerc/swift/swift_inoutParameters.html")
def swift_closures(request):
	return render(request, "numerc/swift/swift_closures.html")
def swift_forEach(request):
	return render(request, "numerc/swift/swift_forEach.html")
def swift_filter(request):
	return render(request, "numerc/swift/swift_filter.html")
def swift_reduce(request):
	return render(request, "numerc/swift/swift_reduce.html")
def swift_sort(request):
	return render(request, "numerc/swift/swift_sort.html")
def swift_structs(request):
	return render(request, "numerc/swift/swift_structs.html")
def swift_properties(request):
	return render(request, "numerc/swift/swift_properties.html")
def swift_classes(request):
	return render(request, "numerc/swift/swift_classes.html")
def swift_enums(request):
	return render(request, "numerc/swift/swift_enums.html")
def swift_methods(request):
	return render(request, "numerc/swift/swift_methods.html")
def swift_switch(request):
	return render(request, "numerc/swift/swift_switch.html")
def swift_protocolsAndInheritance(request):
		return render(request, "numerc/swift/swift_protocolsAndInheritance.html")
def swift_override(request):
		return render(request, "numerc/swift/swift_override.html")
def swift_init(request):
		return render(request, "numerc/swift/swift_init.html")
def swift_standardLibrary(request):
		return render(request, "numerc/swift/swift_standardLibrary.html")
def swift_sets(request):
		return render(request, "numerc/swift/swift_sets.html")
def swift_conditionals(request):
		return render(request, "numerc/swift/swift_conditionals.html")
def swift_loops(request):
		return render(request, "numerc/swift/swift_loops.html")
def swift_views(request):
		return render(request, "numerc/swift/swift_views.html")
def swift_stateAndSwiftUI(request):
		return render(request, "numerc/swift/swift_stateAndSwiftUI.html")
def swift_programArchitecture(request):
		return render(request, "numerc/swift/swift_programArchitecture.html")
def swift_xcodeShortcuts(request):
		return render(request, "numerc/swift/swift_xcodeShortcuts.html")
def swift_mvvm(request):
		return render(request, "numerc/swift/swift_mvvm.html")

# java functions
def java_preface(request):
		return render(request, "numerc/java/java_preface.html")
def java_typesAndVariables(request):
		return render(request, "numerc/java/java_typesAndVariables.html")
def java_conditionals(request):
		return render(request, "numerc/java/java_conditionals.html")
def java_variableScope(request):
		return render(request, "numerc/java/java_variableScope.html")
def java_arrays(request):
		return render(request, "numerc/java/java_arrays.html")
def java_loops(request):
		return render(request, "numerc/java/java_loops.html")
def java_algorithms(request):
		return render(request, "numerc/java/java_algorithms.html")
def java_consolePrograms(request):
		return render(request, "numerc/java/java_consolePrograms.html")
def java_functions(request):
		return render(request, "numerc/java/java_functions.html")
def java_strings(request):
		return render(request, "numerc/java/java_strings.html")
def java_overloading(request):
		return render(request, "numerc/java/java_overloading.html")
def java_multidimensional(request):
		return render(request, "numerc/java/java_multidimensional.html")
def java_compilation(request):
		return render(request, "numerc/java/java_compilation.html")
def java_objects(request):
		return render(request, "numerc/java/java_objects.html")
def java_constructors(request):
		return render(request, "numerc/java/java_constructors.html")
def java_gettersSetters(request):
		return render(request, "numerc/java/java_gettersSetters.html")
def java_inheritance(request):
		return render(request, "numerc/java/java_inheritance.html")
def java_fileProcessing(request):
		return render(request, "numerc/java/java_fileProcessing.html")
def java_polymorphism(request):
		return render(request, "numerc/java/java_polymorphism.html")
def java_objectReferences(request):
		return render(request, "numerc/java/java_objectReferences.html")
def java_interfaces(request):
		return render(request, "numerc/java/java_interfaces.html")
def java_dataStructuresAndAlgorithms(request):
		return render(request, "numerc/java/java_dataStructuresAndAlgorithms.html")

# js functions 
def js_preface(request):
		return render(request, "numerc/js/js_preface.html")
def js_syntaxParsers(request):
		return render(request, "numerc/js/js_syntaxParsers.html")
def js_lexicalEnvironments(request):
		return render(request, "numerc/js/js_lexicalEnvironments.html")
def js_executionContexts(request):
		return render(request, "numerc/js/js_executionContexts.html")
def js_variables(request):
		return render(request, "numerc/js/js_variables.html")
def js_baseTypes(request):
		return render(request, "numerc/js/js_baseTypes.html")
def js_mathObject(request):
		return render(request, "numerc/js/js_mathObject.html")
def js_regex(request):
		return render(request, "numerc/js/js_regex.html")
def js_booleanOperators(request):
		return render(request, "numerc/js/js_booleanOperators.html")
def js_conditionalControl(request):
		return render(request, "numerc/js/js_conditionalControl.html")
def js_loops(request):
		return render(request, "numerc/js/js_loops.html")
def js_arrays(request):
		return render(request, "numerc/js/js_arrays.html")
def js_objects(request):
		return render(request, "numerc/js/js_objects.html")
def js_functions(request):
		return render(request, "numerc/js/js_functions.html")
def js_methods(request):
		return render(request, "numerc/js/js_methods.html")
def js_this(request):
		return render(request, "numerc/js/js_this.html")
def js_scope(request):
		return render(request, "numerc/js/js_scope.html")
def js_angular(request):
		return render(request, "numerc/js/js_angular.html")

# Lisp functions
def lisp_preface(request):
		return render(request, "numerc/lisp/lisp_preface.html")
def lisp_expressions(request):
		return render(request, "numerc/lisp/lisp_expressions.html")
def lisp_naming(request):
		return render(request, "numerc/lisp/lisp_naming.html")
def lisp_environment(request):
		return render(request, "numerc/lisp/lisp_environment.html")
def lisp_evaluatingCombinations(request):
		return render(request, "numerc/lisp/lisp_evaluatingCombinations.html")
def lisp_strings(request):
		return render(request, "numerc/lisp/lisp_strings.html")
def lisp_images(request):
		return render(request, "numerc/lisp/lisp_images.html")
def lisp_constants(request):
		return render(request, "numerc/lisp/lisp_constants.html")
def lisp_compoundProcedures(request):
		return render(request, "numerc/lisp/lisp_compoundProcedures.html")
def lisp_substitutionModel(request):
		return render(request, "numerc/lisp/lisp_substitutionModel.html")
def lisp_applicativeNormal(request):
		return render(request, "numerc/lisp/lisp_applicativeNormal.html")
def lisp_conditionals(request):
		return render(request, "numerc/lisp/lisp_conditionals.html")
def lisp_compoundPredicates(request):
		return render(request, "numerc/lisp/lisp_compoundPredicates.html")
def lisp_lists(request):
		return render(request, "numerc/lisp/lisp_lists.html")
def lisp_listDataDefinitions(request):
		return render(request, "numerc/lisp/lisp_listDataDefinitions.html")
def lisp_newtonsMethod(request):
		return render(request, "numerc/lisp/lisp_newtonsMethod.html")
def lisp_blockStructuring(request):
		return render(request, "numerc/lisp/lisp_blockStructuring.html")
def lisp_iteration(request):
		return render(request, "numerc/lisp/lisp_iteration.html")
def lisp_treeRecursion(request):
		return render(request, "numerc/lisp/lisp_treeRecursion.html")
def lisp_ordersOfGrowth(request):
		return render(request, "numerc/lisp/lisp_ordersOfGrowth.html")
def lisp_higherOrderFunctions(request):
		return render(request, "numerc/lisp/lisp_higherOrderFunctions.html")
def lisp_designingFunctions(request):
		return render(request, "numerc/lisp/lisp_designingFunctions.html")
def lisp_designingData(request):
		return render(request, "numerc/lisp/lisp_designingData.html")
def lisp_selfReference(request):
		return render(request, "numerc/lisp/lisp_selfReference.html")
def lisp_designingLargePrograms(request):
		return render(request, "numerc/lisp/lisp_designingLargePrograms.html")

# ML functions
def ml_preface(request):
		return render(request, "numerc/ml/ml_preface.html")
def ml_simpleData(request):
		return render(request, "numerc/ml/ml_simpleData.html")
def ml_expressionVariableBindings(request):
		return render(request, "numerc/ml/ml_expressionsVariableBindings.html")
def ml_variableImmutability(request):
		return render(request, "numerc/ml/ml_variableImmutability.html")
def ml_logicalOperators(request):
		return render(request, "numerc/ml/ml_logicalOperators.html")
def ml_functionBindings(request):
		return render(request, "numerc/ml/ml_functionBindings.html")
def ml_pairs(request):
		return render(request, "numerc/ml/ml_pairs.html")
def ml_tuples(request):
		return render(request, "numerc/ml/ml_tuples.html")
def ml_errors(request):
		return render(request, "numerc/ml/ml_errors.html")
def ml_customDataTypes(request):
		return render(request, "numerc/ml/ml_customDataTypes.html")

#  C++ functions
def cpp_preface(request):
	return render(request, "numerc/cpp/cpp_preface.html")
def cpp_errors(request):
	return render(request, "numerc/cpp/cpp_errors.html")
def cpp_variablesAndTypes(request):
	return render(request, "numerc/cpp/cpp_variablesAndTypes.html")
def cpp_basicOperators(request):
	return render(request, "numerc/cpp/cpp_basicOperators.html")
def cpp_controlFlow(request):
	return render(request, "numerc/cpp/cpp_controlFlow.html")
def cpp_functions(request):
	return render(request, "numerc/cpp/cpp_functions.html")
def cpp_preprocessor(request):
	return render(request, "numerc/cpp/cpp_preprocessor.html")
def cpp_namespaces(request):
	return render(request, "numerc/cpp/cpp_namespaces.html")
def cpp_algorithmIntro(request):
	return render(request, "numerc/cpp/cpp_algorithmIntro.html")
def cpp_insertionSort(request):
	return render(request, "numerc/cpp/cpp_insertionSort.html")
def cpp_mergeSort(request):
	return render(request, "numerc/cpp/cpp_mergeSort.html")
def cpp_peakFinder(request):
	return render(request, "numerc/cpp/cpp_peakFinder.html")
def cpp_hashing(request):
	return render(request, "numerc/cpp/cpp_hashing.html")

# Prolog Functions
def prolog_preface(request):
	return render(request, "numerc/prolog/prolog_preface.html")
def prolog_atoms(request):
	return render(request, "numerc/prolog/prolog_atoms.html")

#  Haskell functions
def haskell_intro(request):
	return render(request, "numerc/haskell/haskell_intro.html")
def haskell_lambdaCalculus(request):
	return render(request, "numerc/haskell/haskell_lambdaCalculus.html")
def haskell_variables(request):
	return render(request, "numerc/haskell/haskell_variables.html")
