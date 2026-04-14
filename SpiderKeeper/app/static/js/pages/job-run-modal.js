$(document).ready(function() {
    const selectSpiderElement = document.getElementsByName("spider_name")[0];
    const spiderArgumentsInput = document.getElementsByName("spider_arguments")[0];

    // When the modal is open, pre-fill args for the default spider.
    $("#job-run-modal").on("shown.bs.modal", function () {
        // Check to prevent overwriting user input.
        if (!spiderArgumentsInput.value) {
            setSpiderArguments(selectSpiderElement);
        }
    });

    // When we choose a spider, update args.
    selectSpiderElement.addEventListener("change", function() {
        setSpiderArguments(selectSpiderElement);
    });

    function setSpiderArguments(selectElement) {
        var selectedOption = selectElement.options[selectElement.selectedIndex];
        var argumentsString = selectedOption ? selectedOption.getAttribute("data-arguments-string") : "";
        if (argumentsString && argumentsString !== "") {
            spiderArgumentsInput.value = argumentsString;
        } else {
            spiderArgumentsInput.value = "";
        }
    }
});
