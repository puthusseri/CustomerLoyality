VERSION 5.00
Object = "{CDE57A40-8B86-11D0-B3C6-00A0C90AEA82}#1.0#0"; "MSDATGRD.OCX"
Begin VB.Form Form10 
   BackColor       =   &H00000000&
   ClientHeight    =   11280
   ClientLeft      =   300
   ClientTop       =   -240
   ClientWidth     =   20250
   ControlBox      =   0   'False
   LinkTopic       =   "Form10"
   ScaleHeight     =   11280
   ScaleWidth      =   20250
   Begin VB.PictureBox Picture1 
      Appearance      =   0  'Flat
      BackColor       =   &H80000005&
      ForeColor       =   &H80000008&
      Height          =   10455
      Left            =   15600
      Picture         =   "Form10.frx":0000
      ScaleHeight     =   10425
      ScaleWidth      =   4545
      TabIndex        =   1
      Top             =   -360
      Width           =   4575
      Begin VB.PictureBox Picture2 
         Height          =   6135
         Left            =   720
         Picture         =   "Form10.frx":2D610
         ScaleHeight     =   6075
         ScaleWidth      =   3195
         TabIndex        =   4
         Top             =   600
         Width           =   3255
         Begin VB.TextBox Text1 
            Height          =   495
            Left            =   0
            TabIndex        =   16
            Top             =   5400
            Width           =   4095
         End
         Begin VB.CheckBox Check1 
            BackColor       =   &H00000000&
            ForeColor       =   &H00FFFFFF&
            Height          =   375
            Index           =   10
            Left            =   240
            TabIndex        =   15
            Top             =   4920
            Width           =   2655
         End
         Begin VB.CheckBox Check1 
            BackColor       =   &H00000000&
            ForeColor       =   &H00FFFFFF&
            Height          =   375
            Index           =   9
            Left            =   240
            TabIndex        =   14
            Top             =   4440
            Width           =   2655
         End
         Begin VB.CheckBox Check1 
            BackColor       =   &H00000000&
            ForeColor       =   &H00FFFFFF&
            Height          =   375
            Index           =   8
            Left            =   240
            TabIndex        =   13
            Top             =   3960
            Width           =   2655
         End
         Begin VB.CheckBox Check1 
            BackColor       =   &H00000000&
            ForeColor       =   &H00FFFFFF&
            Height          =   375
            Index           =   7
            Left            =   240
            TabIndex        =   12
            Top             =   3480
            Width           =   2655
         End
         Begin VB.CheckBox Check1 
            BackColor       =   &H00000000&
            ForeColor       =   &H00FFFFFF&
            Height          =   375
            Index           =   6
            Left            =   240
            TabIndex        =   11
            Top             =   3000
            Width           =   2655
         End
         Begin VB.CheckBox Check1 
            BackColor       =   &H00000000&
            ForeColor       =   &H00FFFFFF&
            Height          =   375
            Index           =   5
            Left            =   240
            TabIndex        =   10
            Top             =   2520
            Width           =   2655
         End
         Begin VB.CheckBox Check1 
            BackColor       =   &H00000000&
            ForeColor       =   &H00FFFFFF&
            Height          =   375
            Index           =   4
            Left            =   240
            TabIndex        =   9
            Top             =   2040
            Width           =   2655
         End
         Begin VB.CheckBox Check1 
            BackColor       =   &H00000000&
            ForeColor       =   &H00FFFFFF&
            Height          =   375
            Index           =   3
            Left            =   240
            TabIndex        =   8
            Top             =   1560
            Width           =   2655
         End
         Begin VB.CheckBox Check1 
            BackColor       =   &H00000000&
            ForeColor       =   &H00FFFFFF&
            Height          =   375
            Index           =   2
            Left            =   240
            TabIndex        =   7
            Top             =   1080
            Width           =   2655
         End
         Begin VB.CheckBox Check1 
            BackColor       =   &H00000000&
            ForeColor       =   &H00FFFFFF&
            Height          =   375
            Index           =   1
            Left            =   240
            TabIndex        =   6
            Top             =   600
            Width           =   2655
         End
         Begin VB.CheckBox Check1 
            BackColor       =   &H00000000&
            ForeColor       =   &H00FFFFFF&
            Height          =   375
            Index           =   0
            Left            =   240
            TabIndex        =   5
            Top             =   120
            Width           =   2655
         End
      End
      Begin VB.CommandButton Command1 
         Caption         =   "UPDATE"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   14.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   450
         Left            =   720
         TabIndex        =   3
         Top             =   7440
         Width           =   3375
      End
      Begin VB.CommandButton Command2 
         Caption         =   "ADD-NEW"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   14.25
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   450
         Left            =   720
         TabIndex        =   2
         Top             =   6960
         Width           =   3375
      End
   End
   Begin MSDataGridLib.DataGrid DataGrid1 
      Align           =   1  'Align Top
      Height          =   10095
      Left            =   0
      TabIndex        =   0
      Top             =   0
      Width           =   20250
      _ExtentX        =   35719
      _ExtentY        =   17806
      _Version        =   393216
      AllowUpdate     =   -1  'True
      BackColor       =   0
      ForeColor       =   16777215
      HeadLines       =   1
      RowHeight       =   30
      AllowDelete     =   -1  'True
      BeginProperty HeadFont {0BE35203-8F91-11CE-9DE3-00AA004BB851} 
         Name            =   "Times New Roman"
         Size            =   18
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      BeginProperty Font {0BE35203-8F91-11CE-9DE3-00AA004BB851} 
         Name            =   "Garamond"
         Size            =   15.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ColumnCount     =   2
      BeginProperty Column00 
         DataField       =   ""
         Caption         =   ""
         BeginProperty DataFormat {6D835690-900B-11D0-9484-00A0C91110ED} 
            Type            =   0
            Format          =   ""
            HaveTrueFalseNull=   0
            FirstDayOfWeek  =   0
            FirstWeekOfYear =   0
            LCID            =   1033
            SubFormatType   =   0
         EndProperty
      EndProperty
      BeginProperty Column01 
         DataField       =   ""
         Caption         =   ""
         BeginProperty DataFormat {6D835690-900B-11D0-9484-00A0C91110ED} 
            Type            =   0
            Format          =   ""
            HaveTrueFalseNull=   0
            FirstDayOfWeek  =   0
            FirstWeekOfYear =   0
            LCID            =   1033
            SubFormatType   =   0
         EndProperty
      EndProperty
      SplitCount      =   1
      BeginProperty Split0 
         BeginProperty Column00 
         EndProperty
         BeginProperty Column01 
         EndProperty
      EndProperty
   End
   Begin VB.Image Image1 
      Height          =   960
      Left            =   8880
      Picture         =   "Form10.frx":5AC20
      Top             =   10320
      Width           =   3855
   End
End
Attribute VB_Name = "Form10"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim x As String
Dim chkno As Integer
Private Sub Check1_Click(Index As Integer)
If Check1(Index).Value = 1 Then
Command2.Enabled = False
ElseIf Check1(Index).Value = 0 Then
Command2.Enabled = True
End If
For k = 0 To rec.Fields.Count - 1
If Check1(k).Value = 1 Then
chkno = k
End If
Next
End Sub

Private Sub Command1_Click()
DataGrid1.RowTop 0
End Sub

Private Sub Command2_Click()
temp0 = idgenerator
rec.AddNew
rec.Fields(0) = temp0
For k = 1 To rec.Fields.Count - 1
If LCase(Mid(rec.Fields(k).Name, 1, 4)) = "date" Then
rec.Fields(k) = DateTime.Date
Else
x = inputbox1(UCase(rec.Fields(k).Name), "ADD-NEW " & Form4.tbllbl1(tblno).Caption)

rec.Fields(k) = x
End If
Next
rec.Update
Set DataGrid1.DataSource = rec

'Work After Adding Some values
If Form4.tbllbl1(tblno).Caption = "STOCK" Then
rec.MoveLast
If rec2.State = 1 Then
rec2.Close
End If
rec2.open "select * from booking where status = 'UNDER PROCESS' and colour_id='" & rec.Fields(2) & "'", con, adOpenKeyset, adLockOptimistic
If rec2.RecordCount <> 0 Then
rec.Fields(7) = "ISSUED - " & rec2.Fields(0)
rec2.Fields(4) = "ON"
rec2.Update
End If
End If



If Form4.tbllbl1(tblno).Caption = "CLASS" Then
Unload Form2
rec.MoveLast
temp = rec.Fields(0)
If rec2.State = 1 Then
rec2.Close
End If
rec2.open "select * from " & Form4.tbllbl1(tblno).Caption, con, adOpenKeyset, adLockOptimistic
Set DataGrid1.DataSource = rec2
If rec.State = 1 Then
rec.Close
End If
rec.open "select * from directory", con, adOpenKeyset, adLockOptimistic
X1 = idgenerator
rec.AddNew
rec.Fields(0) = X1
rec.Fields(1) = temp
For t = 2 To 13
rec.Fields(t) = 0
Next
rec.Update
If rec.State = 1 Then
rec.Close
End If
rec.open "select * from " & Form4.tbllbl1(tblno).Caption, con, adOpenKeyset, adLockOptimistic
Set DataGrid1.DataSource = rec
End If

End Sub

Private Sub DataGrid1_AfterDelete()
If Form4.tbllbl1(tblno).Caption = "CLASS" Then
temp0 = DataGrid1.Row
If rec2.State = 1 Then
rec2.Close
End If
rec2.open "select * from directory", con, adOpenKeyset, adLockOptimistic
rec2.Move (temp0)
rec2.Delete
End If

End Sub


Private Sub DataGrid1_BeforeDelete(Cancel As Integer)
If Form4.tbllbl1(tblno).Caption = "CLASS" Then Unload Form2
Y = msgbox1("Are You Sure...!!!!")
If Y = 2 Then
Cancel = True
End If
End Sub

Private Sub DataGrid1_DblClick()
Unload Me
End Sub

Private Sub Form_DblClick()
Unload Me
End Sub

Private Sub Form_Load()
Form10.WindowState = 2
End Sub

Private Sub Picture4_Click()

End Sub
'For searcch
Private Sub Text1_Change()
If rec.State = 1 Then
rec.Close
End If
If Check1(chkno).Caption <> "CHARGE" And Check1(chkno).Caption <> "PRICE" Then
rec.open "select * from " & Form4.tbllbl1(tblno).Caption & " where " & Check1(chkno).Caption & " = '" & Text1.Text & "'"
Else
rec.open "select * from " & Form4.tbllbl1(tblno).Caption & " where " & Check1(chkno).Caption & " = " & Val(Text1.Text)
End If
Set DataGrid1.DataSource = rec
If Text1.Text = "" Then
If rec.State = 1 Then
rec.Close
End If
rec.open "select * from " & Form4.tbllbl1(tblno).Caption
Set DataGrid1.DataSource = rec
End If
End Sub
