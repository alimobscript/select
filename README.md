# Select
------------

下拉选择框

````html
<form action="" id="form">
    <div class="ali-field">
        <div class="ali-select" id="select">
            <select>
                <option value="">提交类型</option>
                <option value="1">下拉列表1</option>
                <option value="2">下拉列表2</option>
                <option value="3" selected>下拉列表3</option>
            </select>
        </div>
    </div>
</form>

<script type="text/javascript">
    seajs.config({
        alias: {
            '$' :        'handy/jquto/1.0.2/jquto',
            'select':    'alimobscript/select/1.0.1/select'
        }
    });
    seajs.use(['$', 'select'], function($, Select){
        new Select({
            element: '#select'
        });
    });
</script>
````