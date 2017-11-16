function add(elem) {
    var element = $('<li> <span></span> <button class="delete-button">Удалить</button> </li>');
    $('span', element).text(elem);
    $('#root ul').append(element);
    $('.delete-button', element).click(
        function() {
            $(this).parent().remove()
        }
    );
}
$(function(){
    $('#root').append('<ul></ul>');
    $('#root').append('<input id="add_task_input"> <button id="add_task">Добавить</button>');

    $('#add_task').click(
        function() {
            add($('#add_task_input').val())
        }
    );
    add('Сделать задание #3 по web-программированию');
});