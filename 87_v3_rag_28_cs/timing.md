# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 정부 기관에 대해 읽다가 궁금해졌어… 재향군인부(Department of Veterans Affairs
     6.67s  <ret> 발화 (turn1 첫 프레임)
     7.07s  agent 발화 시작: <ret> 네, 그런 역사를 생각하시는 건 좋은 질문이에요… 재향군인부는 천구백삼십년 칠월 이십일일에 설립됐
     7.23s  user  발화 끝
     8.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.41s]: The United States Department of Veterans Affairs was established on Ju
    14.76s  agent 발화 끝
    14.95s  user  발화 시작: 천구백삼십년? 진짜? 나는 훨씬 더 일찍 시작됐다고 생각했어, 남북 전쟁 이후쯤에, 아니… 잘 모르겠네.
    23.71s  user  발화 끝
    23.76s  agent 발화 시작: 그렇게 생각하시는 건 이해가 됩니다, 오랫동안 퇴역 군인들이 보살핌을 받아왔으니까요. 하지만 공식적인 부서는
    33.87s  agent 발화 끝
    34.51s  user  발화 시작: 근데… 그 전에 뭔가 없었어? 연방 차원에서 퇴역 군인을 지원하는 게 뭔가 있었던 것 같은데. 갑자기 나타났
    43.05s  <ret> 발화 (turn5 첫 프레임)
    43.28s  agent 발화 시작: <ret> 맞아요, 그런 점을 생각하시는 건 당연합니다, 시스템이 하룻밤 사이에 생기는 건 아니니까요… 천구
    43.36s  user  발화 끝
    45.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.15s]: Prior to 1930, the Veterans Bureau, established in 1921, handled veter
    57.42s  agent 발화 끝
