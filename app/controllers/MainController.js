app.controller('MainController',['$scope','$filter', function($scope,$filter){

    let UID = 0;
    //$scope.newEvent = null;

    $scope.list = [];

    //============Add new events=================
    $scope.addEvent = () => {
        $scope.newEvent = {
            UID : UID + 1,
            Event : $scope.addtoEvent,
            cdate : $scope.date
        };

        //$scope.list.push($scope.newEvent);
        if($scope.newEvent.id == null){
            UID = UID + 1;
            $scope.newEvent.id = UID;
            $scope.list.push($scope.newEvent);

        }
        else{
            for(const i in $scope.list){
                if($scope.list[i].id == $scope.newEvent.id){
                    $scope.list[i] = $scope.newEvent;
            }
         }
       }
        $scope.newEvent = null;
    }

    //============Delete events=================
    $scope.deleteEvent = () =>{
        let oldList = $scope.list;
        $scope.list = [];
        angular.forEach(oldList, (checked) => {
            if (!checked.done) $scope.list.push(checked);
        });
    }

    //============View events=================
    $scope.viewEvent = () => {
        let Plist = $scope.list;
        $scope.Viewdate = {};
        //let vdate = new Date;
        //vdate = $filter(Viewdate);
        let pdate = $filter(Plist.$scope.cdate);
        let ppEvent = $filter(Plist.$scope.Event);
        //pdate = $filter(Plist.$scope.cdate);
        $scope.Nlist = [];
        /*angular.forEach(Plist => {
            if(angular.equals($scope.cdate,$scope.Viewdate)){
                $scope.Nlist.push({SEvent: $scope.Event, cdate:$scope.Viewdate, complete: false});
            }
        });*/
        for( let i in Plist  => {
            if(angular.equals($scope.Viewdate,i.pdate)){
                $scope.Nlist.push({sEvent:i.ppEvent, cdate:$scope.Viewdate,complete: false});
            }
        });
    }

    $scope.ViewEvent2 = () =>{
        $scope.events = [];
        let vDate = null;
        let cDate = null;

        $scope.Ndate = $scope.date;//Viewdate
        $scope.Nevent = $scope.Event;

        $scope.setDate = function () {
            $scope.Ndate = $scope.date;//Viewdate
            console.log($scope.Ndate);
            if($scope.Ndate != null){
                let year = $scope.Ndate.getFullYear();
                let month = $scope.Ndate.getMonth()+1;
                let day = $scope.Ndate.getDate()+1;
                cDate = {year,month,day};
            }
        }
        $scope.setEvent = function () {
            $scope.Nevent = $scope.Event;
            console.log($scope.Event);
        }
        $scope.save = function () {
            if($scope.Ndate){
                if($scope.Nevent){
                    $scope.events.push({
                        complete:false,
                        eedate : cDate,
                        sevent:Event
                    });

                    console.log('add');
                    console.log($scope.event);

                }
            }
        }
    }

    //============Update events=================
    $scope.updateEvent = (id) => {
        for(let i in $scope.list){
            if($scope.list[i].id == id){
                $scope.newEvent = angular.extend($scope.list[i]);
            }
        }

    }

}]);