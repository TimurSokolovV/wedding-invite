var programMap;
function initializeProgramMap() {
  ($clickedElement = $j(this)), ($modal = $j("#program-map"));
  var eventIdInput = $modal.find("#program-map-event-id"),
    reasonText = $modal.find("#program-map-reason"),
    mapWrapper = $j("#program-map-wrapper");
  mapWrapper.show(),
    reasonText.hide(),
    null != programMap && programMap.destroy();
  var coordinates = [];
  if ("value" == $clickedElement.attr("class"))
    $clickedElement.data("id") && eventIdInput.val($clickedElement.data("id")),
      (coordinates = $clickedElement.data("coords").split(","));
  else if ("form-control" == $clickedElement.attr("class")) {
    var selectedOption = $clickedElement.find("option:selected").data("coords");
    selectedOption && (coordinates = selectedOption.split(","));
  }
  if (coordinates)
    if (
      ((programMap = new ymaps.Map("program-map-wrapper", {
        center: 2 == coordinates.length ? coordinates : [37.824668, 55.932799],
        zoom: 16,
        controls: ["zoomControl"],
      })).behaviors.disable("scrollZoom"),
      coordinates.length > 0)
    ) {
      var balloonContent = "";
      if ("value" == $clickedElement.attr("class"))
        balloonContent =
          "<h4>" +
          $clickedElement.data("name") +
          '</h4><p class="date-time">' +
          $clickedElement.data("date-when") +
          " в " +
          $clickedElement.data("time-when") +
          '</p><p class="addr">' +
          $clickedElement.data("addr") +
          "</p>";
      else if ("form-control" == $clickedElement.attr("class")) {
        var selectedOption = $clickedElement.find("option:selected");
        balloonContent =
          "<h4>" +
          selectedOption.data("name") +
          '</h4><p class="date-time">' +
          selectedOption.data("date-when") +
          " в " +
          selectedOption.data("time-when") +
          '</p><p class="addr">' +
          selectedOption.data("addr") +
          "</p>";
      }
      var placemark = new ymaps.Placemark(
        coordinates,
        { balloonContentBody: balloonContent },
        { preset: "twirl#redStretchyIcon", draggable: !1 }
      );
      programMap.geoObjects.add(placemark);
    } else {
      var clusterer = new ymaps.Clusterer({
          preset: "islands#invertedVioletClusterIcons",
          groupByCoordinates: !1,
          clusterDisableClickZoom: !1,
          clusterHideIconOnBalloonOpen: !1,
          geoObjectHideIconOnBalloonOpen: !1,
          hasBalloon: !0,
        }),
        placemarks = [];
      eventIdInput.find("option").each(function (index, element) {
        var option = $j(this),
          balloonContent =
            "<h4>" +
            option.data("name") +
            '</h4><p class="addr">' +
            option.data("addr") +
            "</p>";
        option.val() &&
          placemarks.push(
            new ymaps.Placemark(
              option.data("coords").split(","),
              {
                balloonContentBody: balloonContent,
                clusterCaption:
                  option.data("date-when") + " в " + option.data("time-when"),
              },
              { preset: "islands#violetIcon" }
            )
          );
      }),
        clusterer.add(placemarks),
        programMap.geoObjects.add(clusterer),
        programMap.setBounds(clusterer.getBounds(), { checkZoomRange: !0 });
    }
  else
    mapWrapper.hide(),
      reasonText.text("Координаты события не обнаружены"),
      reasonText.show();
}
$j("#program p.addr span.value, #section-program p.addr span.value").on(
  "click",
  initializeProgramMap
),
  $j("#program-map #program-map-event-id").on("change", initializeProgramMap);
