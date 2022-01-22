/* -------------------------------------------------------------------------- */
/*                              Linked List Demo                              */
/* -------------------------------------------------------------------------- */
const body = d3.select("body");
const linkedList = body.selectAll("ul.linkedlist").selectAll("ul");
const linkedListChild = document.querySelector(
	"ul.linkedlist ul li"
);
console.log(linkedListChild);
const linkedListColors = {
	arrowColor: "#747578",
};
const linkedListDimensions = {
	width: linkedListChild.clientWidth / 4,
	height: linkedListChild.clientHeight,
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
	.attr("y1", linkedListDimensions.height / 4)
	.attr("y2", linkedListDimensions.height / 4)
	.attr("stroke", linkedListColors.arrowColor)
	.attr("stroke-width", '1px');
node
	.append("line")
	.attr('x1', linkedListDimensions.width)
	.attr('y1', linkedListDimensions.height / 4)
	.attr('x2', linkedListDimensions.width - 5)
	.attr('y2', (linkedListDimensions.height / 4) + 2)
	.attr("stroke", linkedListColors.arrowColor)
	.attr("stroke-width", '1px');
node
	.append("line")
	.attr('x1', linkedListDimensions.width)
	.attr('y1', linkedListDimensions.height / 4)
	.attr('x2', linkedListDimensions.width - 5)
	.attr('y2', (linkedListDimensions.height / 4) - 2)
	.attr("stroke", linkedListColors.arrowColor)
	.attr("stroke-width", '1px');