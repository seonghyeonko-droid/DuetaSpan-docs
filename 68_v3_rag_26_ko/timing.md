# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "연슬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2026-05-02",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-02-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 배우스님. 요즘 스트레스가 너무 심해서 잠도 잘  | S2 그냥… 일 때문에 계속 걱정돼서 그래요. 마감일도 다가오고,  | S3 음… 잘 모르겠어요. 왜 갑자기 그런 말씀을 하시는 거예요? | S4 우유는 좀 싫어하는데… 음악은 괜찮아요.

     0.00s  user  발화 시작: 안녕하세요, 배우스님. 요즘 스트레스가 너무 심해서 잠도 잘 안 와요.
     4.98s  agent 발화 시작: 안녕하세요! 스트레스 때문에 잠 못 이루시는군요. 제가 편안하게 잠들 수 있도록 도와드릴게요.
     4.98s  user  발화 끝
    10.96s  user  발화 시작: 네, 부탁드려요. 뭔가 간단한 스트레스 해소법 같은 거 있을까요?
    10.96s  agent 발화 끝
    15.45s  agent 발화 시작: 간단한 호흡 운동은 어떠세요? 숨을 깊게 들이쉬고 천천히 내쉬는 걸 반복하면 마음이 차분해질 거예요.
    15.45s  user  발화 끝
    22.42s  user  발화 시작: 그렇죠.
    22.42s  agent 발화 끝
    22.92s  user  발화 시작: 음, 해봤는데 잘 안 돼요. 뭔가 다른 방법은 없을까요?
    22.92s  user  발화 끝
    27.41s  agent 발화 시작: 네네.
    27.41s  user  발화 끝
    27.90s  agent 발화 시작: [curious] 혹시 어떤 종류의 스트레스인지 조금 더 자세히 말씀해 주시겠어요? 어떤 상황 때문에 힘드신
    27.90s  agent 발화 끝
    34.88s  user  발화 시작: 그냥… 일 때문에 계속 걱정돼서 그래요. 마감일도 다가오고, 해야 할 일이 너무 많고.
    34.88s  agent 발화 끝
    41.36s  agent 발화 시작: 일이 많으셔서 힘드시군요. 잠시 하던 일을 멈추고, 편안하게 몸을 움직여 보는 건 어떠세요?
    41.36s  user  발화 끝
    47.84s  user  발화 시작: 몸을 움직인다고요?
    47.84s  agent 발화 끝
    48.83s  agent 발화 시작: 네, 간단한 스트레칭이나 산책도 도움이 될 수 있어요. 몸을 움직이면 긴장이 풀리고 기분 전환이 될 거예요.
    48.83s  user  발화 끝
    56.81s  user  발화 시작: 음.
    56.81s  agent 발화 끝
    57.30s  user  발화 시작: 아, 그럴까요?
    57.30s  user  발화 끝
    58.30s  agent 발화 시작: [happy] 네, 특히 햇볕을 쬐면서 산책하면 비타민 D도 얻을 수 있고, 기분도 훨씬 좋아질 거예요.
    58.30s  user  발화 끝
    65.78s  user  발화 시작: 음.
    65.78s  agent 발화 끝
    66.27s  agent 발화 시작: 혹시 인도 독립운동가에 대해 아세요?
    66.27s  user  발화 끝
    68.77s  user  발화 시작: 음… 잘 모르겠어요. 왜 갑자기 그런 말씀을 하시는 거예요?
    68.77s  agent 발화 끝
    73.05s  <ret> 발화 (turn18 첫 프레임)
    73.25s  agent 발화 시작: <ret> 인도 독립운동가 마하리시 다야난다 사라스와티가, 천팔백칠십육년에 '스와라지', 즉 자치통치라는 단
    73.25s  user  발화 끝
    73.72s  ⚡SPAN 주입 [d'=0.68s / d_lead=5.98s]: Maharishi Dayanand Saraswati was the first Indian leader to use the wo
    79.23s  user  발화 시작: 네.
    79.23s  agent 발화 끝
    79.73s  user  발화 시작: 아, 처음 듣는 단어네요. 자치통치라고요?
    79.73s  user  발화 끝
    82.22s  agent 발화 시작: 네, 스스로 다스리는 것을 의미해요. 인도 독립운동의 중요한 개념이었죠.
    82.22s  user  발화 끝
    86.70s  user  발화 시작: 음.
    86.70s  agent 발화 끝
    87.20s  user  발화 시작: 그렇군요. 근데 다시 스트레스 얘기로 돌아가면… 잠을 잘 자기 위한 다른 방법은 없을까요?
    87.20s  user  발화 끝
    93.68s  agent 발화 시작: [sigh] 잠들기 전에 따뜻한 우유를 마시거나, 조용한 음악을 듣는 것도 도움이 될 수 있어요.
    93.68s  user  발화 끝
   100.66s  user  발화 시작: 우유는 좀 싫어하는데… 음악은 괜찮아요.
   100.66s  agent 발화 끝
   103.15s  agent 발화 시작: 네, 좋아하는 음악을 듣는 건 정말 좋은 방법이에요. 편안하고 잔잔한 음악을 추천해 드릴게요.
   103.15s  user  발화 끝
   109.63s  user  발화 시작: 좋아요. 어떤 음악이 좋을까요?
   109.63s  agent 발화 끝
   111.62s  agent 발화 시작: [laugh] 잔잔한 클래식 음악이나 자연의 소리가 담긴 음악은 숙면에 도움이 될 거예요. 유튜브나 스트리밍
   111.62s  user  발화 끝
   119.59s  agent 발화 끝
