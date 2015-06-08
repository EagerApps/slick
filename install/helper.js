(function(){

  window.EagerSlick = {
    init: function(options){
      var el = Eager.createElement(options.location);

      if (options.title){
        var title = document.createElement("h2");
        title.innerHTML = options.title;
        el.appendChild(title);
      }

      var container = document.createElement("div");
      for (var i=0; i < options.items.length; i++){
        var step = document.createElement("div");

        if (options.items[i].title){
          var title = document.createElement("h3");
          title.innerHTML = options.items[i].title;
          step.appendChild(title);
        }

        step.innerHTML += options.items[i].content;

        container.appendChild(step);
      }
      el.appendChild(container);

      var settings = {};
      settings.autoplay = options.autoplay;

      jQuery(container).slick(settings);
    }
  };

})();
