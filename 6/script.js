$(document).ready(function () {
  $(".check-btn").click(function () {
    const targetBtn = $(this);
    const targetTodoItem = targetBtn.parent();
    const btnClass = targetBtn.attr("class").split(" ");

    if (targetBtn.attr("data-checked") !== "true") {
      btnClass.push("bg-success text-white");
      $(this).html(`<i class="bi bi-check-lg fs-5"></i>`);
      $(this).attr("class", btnClass.join(" "));
      $(targetTodoItem).addClass("text-decoration-line-through text-secondary");
      $(targetBtn).attr("data-checked", "true");
    } else {
      $(this).html(``);
      btnClass.pop();
      btnClass.pop();
      $(this).attr("class", btnClass.join(" "));
      $(targetTodoItem).removeClass(
        "text-decoration-line-through text-secondary"
      );
      $(targetBtn).attr("data-checked", "false");
    }
    // Others Behaviour
  });
});
