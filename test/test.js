var app = {
    launch: function(){
        app: AdditionBy();
        app: SubtractionBy();
    },
    AdditionBy: function(num1,num2)
    {
    return num1+num2;
    },
    SubtractionBy: function(num1,num2)
    {
        return num1-num2;
    
    }
    };

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});


QUnit.test('Testing Addition function with several sets of inputs', function (assert) {
    assert.equal(app.AdditionBy(2,2),4,'Tested with two positive numbers')
    assert.equal(app.AdditionBy(-1,-1),-2,'Tested with two negative numbers')
    assert.equal(app.AdditionBy(3,-1),2,'Tested with a positive and a negative numbers')
    
});

QUnit.test('Testing subtraction function with several sets of inputs', function (assert) {
    assert.equal(app.SubtractionBy(2,2),0,'Tested with two positive numbers')
    assert.equal(app.SubtractionBy(-1,-1),0,'Tested with two negative numbers')
    assert.equal(app.SubtractionBy(3,-1),4,'Tested with a positive and a negative numbers')
    
});
