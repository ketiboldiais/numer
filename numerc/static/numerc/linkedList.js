/* -------------------------------------------------------------------------- */
/*                              Linked List Demo                              */
/* -------------------------------------------------------------------------- */
const body = d3.select("body");
const linkedList = body.selectAll("ul.linkedlist").selectAll("ul");
const linkedListChild = document.querySelector("ul.linkedlist ul li");
console.log(linkedListChild);
const linkedListColors = {
	arrowColor: "#8baaad",
};
const linkedListDimensions = {
	width: linkedListChild.clientWidth,
	height: linkedListChild.clientHeight,
	arrowHeadArmOffset: 3,
};
const linkedListSVG = linkedList
	.append("svg")
	.attr("width", linkedListDimensions.width)
	.attr("height", linkedListDimensions.height);
const node = linkedListSVG.append("g");
node
	.append("line")
	.attr("x1", 0)
	.attr("x2", linkedListDimensions.width)
	.attr("y1", linkedListDimensions.height / 2)
	.attr("y2", linkedListDimensions.height / 2)
	.attr("stroke", linkedListColors.arrowColor);
node
	.append("line")
	.attr("x1", linkedListDimensions.width)
	.attr("y1", linkedListDimensions.height / 2)
	.attr("x2", linkedListDimensions.width - 5)
	.attr(
		"y2",
		linkedListDimensions.height / 2 - linkedListDimensions.arrowHeadArmOffset
	)
	.attr("stroke", linkedListColors.arrowColor);
node
	.append("line")
	.attr("x1", linkedListDimensions.width)
	.attr("y1", linkedListDimensions.height / 2)
	.attr("x2", linkedListDimensions.width - 5)
	.attr(
		"y2",
		linkedListDimensions.height / 2 + linkedListDimensions.arrowHeadArmOffset
	)
	.attr("stroke", linkedListColors.arrowColor);