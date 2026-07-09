# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 정부 기관에 대해 읽다가 궁금해졌어… 퇴역 군인부(Department of Veterans Affair
     8.58s  <ret> 발화 (turn1 첫 프레임)
     8.90s  agent 발화 시작: <ret> 네, 그런 질문을 하시는 건 당연하다고 생각해요… 퇴역 군인부는 천구백삼십 년 7월 21일에 설립
     8.95s  user  발화 끝
     9.78s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.83s]: The United States Department of Veterans Affairs was established on Ju
    15.65s  agent 발화 끝
    15.69s  user  발화 시작: 1930년? 진짜? 나는 훨씬 더 일찍 시작됐다고 생각했어, 남북 전쟁 이후쯤에… 아니, 잘 모르겠네.
    24.12s  agent 발화 시작: 그렇게 생각하시는 건 이해가 돼요, 오랫동안 퇴역 군인들이 보살핌을 받아왔으니까요. 하지만 공식적인 부서는 
    24.21s  user  발화 끝
    32.46s  user  발화 시작: 근데… 그 전에 뭔가 없었어? 연방 차원에서 퇴역 군인을 지원하는 게 뭔가 있었을 것 같은데. 갑자기 생겨났
    32.56s  agent 발화 끝
    42.08s  <ret> 발화 (turn5 첫 프레임)
    42.14s  agent 발화 시작: <ret> 맞아요, 그런 의문을 가지시는 건 당연해요, 시스템이 하룻밤 사이에 생기는 건 아니니까요… 천구백
    42.29s  user  발화 끝
    44.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.30s]: Prior to 1930, the Veterans Bureau, established in 1921, handled veter
    55.40s  agent 발화 끝
