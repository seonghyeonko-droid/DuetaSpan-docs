# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was reading about government departments and wondered—when
     7.42s  <ret> 발화 (turn1 첫 프레임)
     7.74s  agent 발화 시작: <ret> That’s a good question to ask— The Department of Veter
     7.79s  user  발화 끝
     8.38s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.52s]: The United States Department of Veterans Affairs was established on Ju
    15.29s  agent 발화 끝
    16.16s  user  발화 시작: Nineteen thirty? That seems…late. I thought veterans’ suppor
    22.67s  agent 발화 시작: It does go back further, certainly. Earlier support systems 
    22.88s  user  발화 끝
    31.11s  user  발화 시작: But was there *nothing* official before 1930? Surely there w
    31.29s  agent 발화 끝
    38.86s  <ret> 발화 (turn5 첫 프레임)
    39.26s  agent 발화 시작: <ret> Actually, there was— Before nineteen thirty, the Veter
    39.40s  user  발화 끝
    40.14s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.41s]: Prior to 1930, the Veterans Bureau, established in 1921, handled veter
    46.77s  agent 발화 끝
