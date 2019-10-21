VERSION 5.00
Begin VB.Form Form21 
   BackColor       =   &H00000000&
   BorderStyle     =   1  'Fixed Single
   ClientHeight    =   11490
   ClientLeft      =   -165
   ClientTop       =   -165
   ClientWidth     =   20460
   ControlBox      =   0   'False
   LinkTopic       =   "Form21"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   Picture         =   "Form21.frx":0000
   ScaleHeight     =   11490
   ScaleWidth      =   20460
   WindowState     =   2  'Maximized
   Begin VB.Frame Frame5 
      BackColor       =   &H00FFFFFF&
      BorderStyle     =   0  'None
      Caption         =   "Frame5"
      Height          =   5415
      Left            =   9000
      TabIndex        =   6
      Top             =   0
      Width           =   6615
      Begin VB.TextBox Text4 
         BeginProperty Font 
            Name            =   "Garamond"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   2400
         TabIndex        =   12
         Top             =   2640
         Width           =   3255
      End
      Begin VB.TextBox Text3 
         BeginProperty Font 
            Name            =   "Garamond"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   2400
         TabIndex        =   10
         Top             =   2040
         Width           =   3255
      End
      Begin VB.TextBox Text2 
         BeginProperty Font 
            Name            =   "Garamond"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   495
         Left            =   2400
         TabIndex        =   8
         Top             =   1440
         Width           =   3255
      End
      Begin VB.Label Label3 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Price"
         BeginProperty Font 
            Name            =   "Garamond"
            Size            =   14.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00000000&
         Height          =   315
         Left            =   960
         TabIndex        =   11
         Top             =   2640
         Width           =   555
      End
      Begin VB.Label Label2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Type"
         BeginProperty Font 
            Name            =   "Garamond"
            Size            =   14.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00000000&
         Height          =   315
         Left            =   960
         TabIndex        =   9
         Top             =   2040
         Width           =   570
      End
      Begin VB.Label Label1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Fitting"
         BeginProperty Font 
            Name            =   "Garamond"
            Size            =   14.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00000000&
         Height          =   315
         Left            =   960
         TabIndex        =   7
         Top             =   1440
         Width           =   750
      End
   End
   Begin VB.TextBox Text1 
      Height          =   375
      Left            =   17160
      TabIndex        =   5
      Top             =   720
      Width           =   3135
   End
   Begin VB.Frame Frame3 
      BackColor       =   &H00000000&
      BorderStyle     =   0  'None
      Caption         =   "Frame2"
      Height          =   255
      Left            =   9000
      TabIndex        =   4
      Top             =   5400
      Width           =   6705
   End
   Begin VB.Frame Frame2 
      BackColor       =   &H00000000&
      BorderStyle     =   0  'None
      Caption         =   "Frame2"
      Height          =   255
      Left            =   2160
      TabIndex        =   3
      Top             =   1440
      Width           =   6585
   End
   Begin VB.ListBox List2 
      Appearance      =   0  'Flat
      BackColor       =   &H00FFFFFF&
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   15.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00000000&
      Height          =   5895
      Left            =   9000
      TabIndex        =   2
      Top             =   5640
      Width           =   6615
   End
   Begin VB.Frame Frame1 
      BackColor       =   &H00000000&
      BorderStyle     =   0  'None
      Caption         =   "Frame1"
      Height          =   12030
      Left            =   2040
      TabIndex        =   1
      Top             =   1680
      Width           =   375
   End
   Begin VB.ListBox List1 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   15.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   12030
      Left            =   2400
      Style           =   1  'Checkbox
      TabIndex        =   0
      Top             =   1680
      Width           =   6375
   End
   Begin VB.Image Image2 
      Height          =   33960
      Left            =   15840
      Picture         =   "Form21.frx":5B57
      Top             =   0
      Width           =   78060
   End
   Begin VB.Image Image1 
      Height          =   960
      Left            =   120
      Picture         =   "Form21.frx":33167
      Top             =   120
      Width           =   3855
   End
End
Attribute VB_Name = "Form21"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim u1 As String
Private Sub Form_DblClick()
If List2.ListCount <> 0 Then
If rec2.State = 1 Then rec2.Close
rec2.open "select * from booking", con, adOpenKeyset, adLockOptimistic
rec2.MoveLast
If rec.State = 1 Then rec.Close
rec.open "select * from demanded_fittings", con, adOpenKeyset, adLockOptimistic
temp = idgenerator
rec.AddNew
rec.Fields(0) = temp
u1 = " " & u1 & " "
rec.Fields(1) = u1
rec.Fields(2) = rec2.Fields(0)
rec.Update
Unload Me
Unload Form5
Else
o = msgbox1("Are you Sure...NO fittings NEEDED..!!!")
If o = 1 Then
Unload Me
Unload Form5
End If
End If

End Sub

Private Sub list1manage()
connect
If rec.State = 1 Then rec.Close
rec.open "select * from fittings", con, adOpenKeyset, adLockOptimistic

While rec.EOF <> True
List1.AddItem rec.Fields(1) & " " & " - " & rec.Fields(2) & " - " & rec.Fields(3)
rec.MoveNext
Wend
rec.MoveFirst
End Sub

Private Sub Form_Load()
list1manage
End Sub

Private Sub List1_Click()
Dim h As Integer
h = 0
If rec3.State = 1 Then rec3.Close
rec3.open "select * from fittings", con, adOpenKeyset, adLockOptimistic
rec.MoveFirst
For t = 0 To List1.ListIndex - 1
rec.MoveNext
Next
Text2.Text = rec.Fields(1)
Text3.Text = rec.Fields(2)
Text4.Text = rec.Fields(3)
If List1.Selected(List1.ListIndex) = True Then

If rec3.RecordCount = List1.ListCount Then
u1 = u1 & " " & List1.ListIndex
Else

While rec3.Fields(1) <> UCase(Text1.Text) Or h = rec3.RecordCount
rec3.MoveNext
h = h + 1
Wend
h = h + List1.ListIndex
u1 = u1 & " " & h
End If

Trim (u1)
List2.AddItem rec.Fields(1) & " " & " - " & rec.Fields(2) & " - " & rec.Fields(3)
End If
rec.MoveFirst
End Sub

Private Sub List2_DblClick()
r = 0
u1 = Trim(u1)
For t = 1 To Len(u1)
f = Mid(u1, t, 1)
If f = " " Then
r = r + 1
If r = List2.ListIndex Then
GoTo l
End If
End If
Next
l:
u2 = Mid(u1, 1, t - 1)
For E = t To Len(u1)
f = Mid(u1, t + 1, 1)
t = t + 1
If f = " " Then
GoTo l1
End If
Next
l1:

u1 = Mid(u1, t, Len(u1))
u1 = Trim(u1)
u1 = u2 & " " & u1
List2.RemoveItem (List2.ListIndex)
End Sub

Private Sub Text1_Change()
If rec.State = 1 Then rec.Close
rec.open "select * from fittings where fitting_name ='" & Trim(Text1.Text) & "'", con, adOpenKeyset, adLockOptimistic
If rec.EOF <> True Then
List1.Clear
For t = 0 To rec.RecordCount - 1
List1.AddItem rec.Fields(1) & " " & " - " & rec.Fields(2) & " - " & rec.Fields(3)
rec.MoveNext
Next
Else
List1.Clear
list1manage
End If
End Sub
