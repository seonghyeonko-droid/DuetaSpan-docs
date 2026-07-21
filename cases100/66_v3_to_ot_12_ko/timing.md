# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 아리 씨, 혹시 알링턴 국립묘지 땅을 누가 기증했는지 알려 주 | S2 아, 죄송해요. 잠시만요. 다시 질문 드려도 될까요? | S3 잠깐만, 택배 왔나 봐 — 문 좀 열어 줄래? | S4 아, 커스티스 리 씨가 땅을 기증했다고요?

     0.00s  user  발화 시작: 아리 씨, 혹시 알링턴 국립묘지 땅을 누가 기증했는지 알려 주실 수 있을까요?
     1.76s  agent 발화 시작: 음.
     2.16s  agent 발화 끝
     5.22s  <ret> 발화 (turn2 첫 프레임)
     5.28s  user  발화 끝
     5.32s  agent 발화 시작: <ret> 알링턴 국립묘지에 대한 정보요? 잠깐만 확인해 볼게요.
     7.00s  ⚡SPAN 주입 [d'=1.77s / d_lead=3.71s]: Custis Lee donated the land for Arlington National Cemetery.
     8.90s  agent 발화 시작: 알링턴 국립묘지 땅은 커스티스 리 씨가 기증하셨습니다.
     9.03s  agent 발화 끝
    11.44s  user  발화 시작: 네.
    11.70s  user  발화 끝
    12.69s  agent 발화 끝
    12.97s  user  발화 시작: 여보, 오븐 타이머 울린다 — 좀 꺼 줄래?
    16.50s  user  발화 시작: 아, 죄송해요. 잠시만요. 다시 질문 드려도 될까요?
    16.53s  user  발화 끝
    19.93s  user  발화 끝
    20.09s  agent 발화 시작: 어떤 질문이 있으신가요?
    21.59s  agent 발화 끝
    21.63s  user  발화 시작: 잠깐만, 택배 왔나 봐 — 문 좀 열어 줄래?
    22.69s  agent 발화 시작: 음.
    23.08s  agent 발화 끝
    24.69s  user  발화 끝
    25.19s  agent 발화 시작: 네, 다시 말씀해 주세요. 제가 도와드리겠습니다.
    27.69s  agent 발화 끝
    28.15s  user  발화 시작: 아, 커스티스 리 씨가 땅을 기증했다고요?
    31.23s  user  발화 끝
    31.28s  agent 발화 시작: 맞습니다. 커스티스 리 씨가 알링턴 국립묘지 땅을 기증하셨습니다. [happy] 그분의 헌신에 감사하죠.
    37.62s  agent 발화 끝
