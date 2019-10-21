VERSION 5.00
Begin VB.Form Form13 
   BackColor       =   &H00404040&
   ClientHeight    =   11280
   ClientLeft      =   120
   ClientTop       =   -90
   ClientWidth     =   20250
   ControlBox      =   0   'False
   LinkTopic       =   "Form13"
   Picture         =   "Form13.frx":0000
   ScaleHeight     =   11280
   ScaleWidth      =   20250
   WindowState     =   2  'Maximized
   Begin VB.PictureBox Picture1 
      AutoSize        =   -1  'True
      Height          =   15195
      Left            =   600
      Picture         =   "Form13.frx":9D56
      ScaleHeight     =   15135
      ScaleWidth      =   19500
      TabIndex        =   0
      Top             =   -720
      Width           =   19560
      Begin VB.Label Label1 
         BackStyle       =   0  'Transparent
         Height          =   2895
         Index           =   0
         Left            =   480
         TabIndex        =   12
         Top             =   1080
         Width           =   3735
      End
      Begin VB.Label Label1 
         BackStyle       =   0  'Transparent
         Height          =   2895
         Index           =   1
         Left            =   5280
         TabIndex        =   11
         Top             =   1080
         Width           =   3735
      End
      Begin VB.Label Label1 
         BackStyle       =   0  'Transparent
         Height          =   2895
         Index           =   2
         Left            =   10080
         TabIndex        =   10
         Top             =   1080
         Width           =   3735
      End
      Begin VB.Label Label1 
         BackStyle       =   0  'Transparent
         Height          =   2895
         Index           =   3
         Left            =   14880
         TabIndex        =   9
         Top             =   1080
         Width           =   3735
      End
      Begin VB.Label Label1 
         BackStyle       =   0  'Transparent
         Height          =   2895
         Index           =   4
         Left            =   480
         TabIndex        =   8
         Top             =   5280
         Width           =   3735
      End
      Begin VB.Label Label1 
         BackStyle       =   0  'Transparent
         Height          =   2895
         Index           =   5
         Left            =   5280
         TabIndex        =   7
         Top             =   5280
         Width           =   3735
      End
      Begin VB.Label Label1 
         BackStyle       =   0  'Transparent
         Height          =   2895
         Index           =   6
         Left            =   9960
         TabIndex        =   6
         Top             =   5280
         Width           =   3735
      End
      Begin VB.Label Label1 
         BackStyle       =   0  'Transparent
         Height          =   2895
         Index           =   7
         Left            =   14760
         TabIndex        =   5
         Top             =   5280
         Width           =   3735
      End
      Begin VB.Label Label1 
         BackStyle       =   0  'Transparent
         Height          =   2895
         Index           =   8
         Left            =   480
         TabIndex        =   4
         Top             =   9480
         Width           =   3735
      End
      Begin VB.Label Label1 
         BackStyle       =   0  'Transparent
         Height          =   2895
         Index           =   9
         Left            =   5280
         TabIndex        =   3
         Top             =   9480
         Width           =   3735
      End
      Begin VB.Label Label1 
         BackStyle       =   0  'Transparent
         Height          =   2895
         Index           =   10
         Left            =   9960
         TabIndex        =   2
         Top             =   9480
         Width           =   3735
      End
      Begin VB.Label Label1 
         BackStyle       =   0  'Transparent
         Height          =   2895
         Index           =   11
         Left            =   14760
         TabIndex        =   1
         Top             =   9480
         Width           =   3735
      End
   End
End
Attribute VB_Name = "Form13"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim mnth As Integer

Private Sub Form_DblClick()
Unload Me
End Sub

Private Sub Image1_Click()

End Sub

Private Sub Label1_DblClick(Index As Integer)
mnth = Label1(Index).Index
z0 = DateTime.Year(DateTime.Date)
If mnth = 1 Then
temp1 = 28
Else
temp1 = 30
End If

If rec.State = 1 Then
rec.Close
End If
rec.open "select class_name,count(booking_id) cnt from booking,class,colour,model where model.class_id=class.class_id and model.model_id=colour.model_id and colour.colour_id=booking.colour_id and booking.status='DEL' and booking.date_of_delivery < '" & mnth + 1 & "/" & temp1 & "/" & z0 & "' and booking.date_of_delivery >= '" & mnth + 1 & "/" & 1 & "/" & z0 & "' group by class.class_name", con, adOpenKeyset, adLockOptimistic
DataReport1.Sections(3).Controls(3).DataField = rec.Fields(0).Name
DataReport1.Sections(3).Controls(4).DataField = rec.Fields(1).Name
Set DataReport1.DataSource = rec

DataReport1.Show
End Sub

