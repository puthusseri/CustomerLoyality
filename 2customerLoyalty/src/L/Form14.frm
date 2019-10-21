VERSION 5.00
Begin VB.Form Form14 
   ClientHeight    =   1305
   ClientLeft      =   9885
   ClientTop       =   6345
   ClientWidth     =   6345
   ControlBox      =   0   'False
   LinkTopic       =   "Form14"
   Picture         =   "Form14.frx":0000
   ScaleHeight     =   1305
   ScaleWidth      =   6345
   Begin VB.Label Label1 
      BackStyle       =   0  'Transparent
      Caption         =   "Anual Report"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   72
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   1935
      Left            =   120
      TabIndex        =   0
      Top             =   -720
      Width           =   6255
   End
End
Attribute VB_Name = "Form14"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False


Private Sub Label1_Click()
Unload Form15
Unload Form14
If rec.State = 1 Then
rec.Close
End If
rec.open "select class_name,count(booking_id) cnt from booking,class,colour,model where model.class_id=class.class_id and model.model_id=colour.model_id and colour.colour_id=booking.colour_id and booking.status='DEL'" & " group by class.class_name", con, adOpenKeyset, adLockOptimistic
DataReport1.Sections(3).Controls(3).DataField = rec.Fields(0).Name
DataReport1.Sections(3).Controls(4).DataField = rec.Fields(1).Name
Set DataReport1.DataSource = rec
DataReport1.Show
End Sub

