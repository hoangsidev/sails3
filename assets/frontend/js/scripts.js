$(document).ready(function (e) {

    $("#s").focus();

    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $('[data-toggle="tooltip"]').tooltip();

    $('#add_mean').click(function () {
        $('#wrap_mean').append(`
        <div class="form-group mean_item">
            <div class="col-xs-9">
                <input type="text" class="form-control" name="mean[]">
            </div>
            <div class="col-xs-2" style="padding-left: 0;">
                <select class="form-control" name="type_word[]">
                    <option value="n/a">N/A</option>
                    <option value="n">Danh từ</option>
                    <option value="exp">Cụm từ</option>
                    <option value="n-prep">Danh từ hoặc giới từ</option>
                    <option value="prep">Giới từ</option>
                    <option value="adj">Tính từ</option>
                    <option value="exc">Thán từ</option>
                    <option value="adv">Trạng từ</option>
                    <option value="verb-1">Động từ nhóm I</option>
                    <option value="verb-2">Động từ nhóm II</option>
                    <option value="verb-3">Động từ nhóm III</option>
                </select>
            </div>
            <div class="col-xs-1" style="padding-left: 0;">
            <button class="btn btn-danger btn-block btn_del_mean" type="button"><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
        </div>
            <div class="clearfix"></div>
        </div>
        `);

        $('.btn_del_mean').click(function(){
            $(this).closest('.mean_item').find('input[name="mean[]"]').val('');
            $(this).closest('.mean_item').find('select[name="type_word[]"]').val('');
            $(this).closest('.mean_item').remove();
        });
    });

    $('#add_example').click(function () {
        $('#wrap_example').append(`
        <div class="form-group example_item">
            <div class="col-md-5">
                <input type="text" class="form-control" name="sentence[]">
            </div>
            <div class="col-md-6" style="padding-left: 0;">
                <input type="text" class="form-control" name="mean_ex[]">
            </div>
            <div class="col-md-1" style="padding-left: 0;">
                                                <button class="btn btn-danger btn-block btn_del_example" type="button"><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
                                            </div>
            <div class="clearfix"></div>
        </div>
        `);
        $('.btn_del_example').click(function(){
            $(this).closest('.example_item').find('input[name="sentence[]"]').val('');
            $(this).closest('.example_item').find('select[name="mean_ex[]"]').val('');
            $(this).closest('.example_item').remove();
        });
    });


    $('.btn_del_mean').click(function(){
        $(this).closest('.mean_item').find('input[name="mean[]"]').val('');
        $(this).closest('.mean_item').find('select[name="type_word[]"]').val('');
        $(this).closest('.mean_item').remove();
    });

    $('.btn_del_example').click(function(){
        $(this).closest('.example_item').find('input[name="sentence[]"]').val('');
        $(this).closest('.example_item').find('select[name="mean_ex[]"]').val('');
        $(this).closest('.example_item').remove();
    });

    
});