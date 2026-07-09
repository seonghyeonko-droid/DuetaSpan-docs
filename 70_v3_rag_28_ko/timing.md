# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 국가 유공자부… 그게 언제 만들어졌는지 궁금하네요. 잘 모르겠 | S2 1930년이라고요? 좀 더 일찍 만들어졌을 줄 알았는데… 그  | S3 그럼 그 전에는 좀 엉망이었겠네요, 그렇죠? | S4 아, 그러네요. 그나저나, 지금은 어떤 일들을 주로 하나요?

     0.00s  user  발화 시작: 국가 유공자부… 그게 언제 만들어졌는지 궁금하네요. 잘 모르겠어요.
     4.99s  <ret> 발화 (turn1 첫 프레임)
     5.30s  agent 발화 시작: <ret> 국가 유공자부를 언제 만들었는지 알아볼까요? 미국 국가 유공자부는 1930년 7월 21일에 설립되
     5.46s  user  발화 끝
     6.03s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.57s]: The United States Department of Veterans Affairs was established on Ju
     8.27s  user  발화 시작: Mhm.
     8.76s  user  발화 끝
    13.87s  agent 발화 끝
    13.92s  user  발화 시작: 1930년이라고요? 좀 더 일찍 만들어졌을 줄 알았는데… 그 전에는 뭘로 대체했죠?
    20.27s  agent 발화 시작: 그 전에는 여러 기관에서 국가 유공자를 지원했어요. 한 기관으로 모아놓지 않았죠.
    20.27s  user  발화 끝
    25.55s  agent 발화 끝
    25.60s  user  발화 시작: 그럼 그 전에는 좀 엉망이었겠네요, 그렇죠?
    27.90s  <ret> 발화 (turn6 첫 프레임)
    27.97s  agent 발화 시작: <ret> 과거에는 여러 기관이 분산되어 있어서요. 1930년 이전에는 여러 연방 정부 기관에서 국가 유공자
    28.24s  user  발화 끝
    29.26s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.82s]: Prior to 1930, veterans’ affairs were handled by various agencies with
    34.77s  user  발화 시작: Mm-hmm.
    35.31s  user  발화 끝
    37.01s  agent 발화 끝
    37.62s  user  발화 시작: 아, 그러네요. 그나저나, 지금은 어떤 일들을 주로 하나요?
    41.83s  user  발화 끝
