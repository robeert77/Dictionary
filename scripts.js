var wordsList = new Array();

function addWord() {
    if (isValid())
        wordsList.push($('#newWord').val());
    $('#newWord').val('');
}

function isValid() {
    var currentWord = $('#newWord').val();
    for (var i of currentWord) {
        if (i < 'A' || (i > 'Z' && i < 'a') || i > 'z') {
            $('#invalidInput').modal();
            return false;
        }
    }
    return true;
}

function checkWord() {
    if (wordsList.includes($('#searchedWord').val()))
        $('#exist').modal();
    else
        $('#non-existing').modal();
    $('#searchedWord').val('');
}

function showDictionary() {
    for (var i of wordsList)
        $('#dictionaryList').append('<li class="list-group-item border-0 py-2">' + i + '</li>');
}
