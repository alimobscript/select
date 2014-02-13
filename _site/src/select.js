/**
 * Created by ermin.zem on 14-2-13.
 */

define(function(require, exports, module){
    var $      = require('$'),
        Widget = require('widget');

    var Select = Widget.extend({
        attrs: {
            triggerType:       'touchend',
            hideOnClickBody:   false,    // 点击其他元素是否隐藏
            selectEle:         null
        },

        events: {
            'touchend h3' :  'toggle',
            'touchend li' :  'change'
        },

        setup: function(){
            var self = this,
                ele = this.element,
                selectEle = $('<div class="ali-select-cont"></div>');

            // 解析select，构建下拉框
            ele.find('option').each(function(index, item){
                var item = $(item),
                    val  = item.val(),
                    name = item.html();

                if(val == '' && index == 0){
                    selectEle.append('<h3>' + name + '</h3>');
                    selectEle.append('<div class="ali-select-main"><div class="ali-select-arrow"></div><ul></ul></div>');
                }else{
                    if(item.prop('selected')){
                        selectEle.find('ul').append('<li data-value="' + val + '" class="active">' + name + '</li>');
                        selectEle.find('h3').html(name);
                    }else{
                        selectEle.find('ul').append('<li data-value="' + val + '">' + name + '</li>');
                    }
                }
            });

            selectEle.find('.ali-select-main').addClass('fn-hide');
            ele.append(selectEle);

            this.set('selectEle', selectEle);

            $(document.body).on(self.get('triggerType'), function(){
                self.hide();
            });
        },

        toggle: function(ev){
            ev.stopPropagation();

            var mainEle = this.get('selectEle').find('.ali-select-main');

            if(mainEle.hasClass('fn-hide')){
                mainEle.removeClass('fn-hide');
            }else{
                mainEle.addClass('fn-hide');
            }
        },

        change: function(ev){
            ev.stopPropagation();

            var selectEle = this.get('selectEle'),
                li = $(ev.currentTarget),
                val = li.attr('data-value'),
                name = li.html();

            this.element.val(val);
            selectEle.find('h3').html(name);
            selectEle.find('.active').removeClass('active');
            li.addClass('active');

            selectEle.find('.ali-select-main').addClass('fn-hide');
        },

        hide: function(){
            this.get('selectEle').find('.ali-select-main').addClass('fn-hide');
        }
    });

    module.exports = Select;
});