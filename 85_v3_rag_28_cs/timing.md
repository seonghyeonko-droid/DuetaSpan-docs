# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 그거 읽고 있었는데… VA는 언제 시작됐어?
     3.21s  <ret> 발화 (turn1 첫 프레임)
     3.53s  agent 발화 시작: <ret> 좋은 질문이에요, 역사를 생각해보면… 미국 재향군인부는 천구백삼십년 칠월 이십일일에 설립됐습니다.
     3.65s  user  발화 끝
     5.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.08s]: The United States Department of Veterans Affairs was established on Ju
    11.13s  agent 발화 끝
    11.16s  user  발화 시작: 천구백삼십년? 그거 좀… 의외로 최근 같지 않아? 더 오래된 줄 알았어.
    16.17s  user  발화 끝
    16.39s  agent 발화 시작: 미국 역사에 비하면 비교적 최근에 만들어진 부처인 것 같아요. 예전에는 그런 체계적인 지원에 집중하지 않았을
    24.88s  agent 발화 끝
    25.38s  user  발화 시작: 그래도 그 전에 뭔가 있었겠지? 퇴역 군인들을 위한 도움이라도?
    28.88s  <ret> 발화 (turn5 첫 프레임)
    29.28s  agent 발화 시작: <ret> 물론 그런 지원이 있었어요… 천구백삼십년 이전에 재향군인국이 천구백이십일년에 설립돼서 혜택과 서비
    29.45s  user  발화 끝
    30.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.03s]: Prior to 1930, the Veterans Bureau, created in 1921, provided benefits
    37.72s  agent 발화 끝
