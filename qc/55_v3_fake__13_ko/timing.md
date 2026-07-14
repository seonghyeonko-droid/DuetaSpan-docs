# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "도훈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "60s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "sibling",
#       "text": "User has a younger sibling named Noah."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "employer",
#       "text": "User works at an e-commerce company."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "trip",
#       "text": "User is planning a trip to Portugal in February."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "show",
#       "text": "User is currently watching a stand-up comedy special."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "emergency",
#       "text": "User's emergency contact is Marco."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "airline",
#       "text": "User usually flies with Air France."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "phone",
#       "text": "User uses a Galaxy Z Flip."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "dish",
#       "text": "User's go-to comfort dish is mushroom risotto."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-07",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-02-12",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 미래의 일기 에피소드 수가 몇 개예요? | S2 일상이 중요하군요. 그런데, 아이가 숙제를 안 하려고 해요.  | S3 좋은 생각이네요. 아이와 함께 시간을 보내는 게 제일 중요한  | S4 회센터는 아이가 좋아할 것 같아요.

     0.00s  user  발화 시작: 미래의 일기 에피소드 수가 몇 개예요?
     2.46s  <ret> 발화 (turn1 첫 프레임)
     3.01s  agent 발화 시작: <ret> 미래의 일기 애니메이션 시리즈는 총 스물여섯개의 에피소드가 있습니다. 꽤 긴 시리즈였죠.
     3.01s  user  발화 끝
     3.49s  ⚡SPAN 주입 [d'=1.03s / d_lead=5.51s]: The anime series Future Diary has a total of 26 episodes.
     8.52s  user  발화 시작: 음, 그렇군요.
     8.52s  agent 발화 끝
     9.52s  agent 발화 시작: 혹시 다른 애니메이션에 대해서도 궁금하신가요? 제가 추천해 드릴 수도 있어요.
     9.52s  user  발화 끝
    14.53s  user  발화 시작: 아니요, 괜찮아요. 그냥 궁금해서 물어봤어요. 요즘 아이들한테 뭘 보여줘야 할지 고민이에요.
    14.53s  agent 발화 끝
    20.04s  agent 발화 시작: 네.
    20.04s  user  발화 끝
    20.28s  <ret> 발화 (turn6 첫 프레임)
    20.54s  agent 발화 시작: <ret> 아이들에게 꾸준한 일상을 만들어주는 건, 불안감을 줄이고 긍정적인 행동을 유도하는 데 도움이 될 
    20.54s  agent 발화 끝
    21.78s  ⚡SPAN 주입 [d'=1.50s / d_lead=9.52s]: Consistent routines can help children feel safe and secure, reducing a
    30.06s  user  발화 시작: 네.
    30.06s  agent 발화 끝
    30.56s  user  발화 시작: 일상이 중요하군요. 그런데, 아이가 숙제를 안 하려고 해요. 어떻게 해야 할까요?
    30.56s  user  발화 끝
    35.54s  <ret> 발화 (turn9 첫 프레임)
    36.07s  agent 발화 시작: <ret> 결과보다는 노력 자체를 칭찬해 주는 게, 아이가 성장하는 마인드를 갖고 어려움을 극복하도록 동기 
    36.07s  user  발화 끝
    36.54s  ⚡SPAN 주입 [d'=1.00s / d_lead=9.52s]: Praising effort rather than outcome can encourage a growth mindset and
    45.40s  <ret> 발화 (turn10 첫 프레임)
    45.59s  agent 발화 시작: <ret> 아이가 숙제를 싫어하는 건 흔한 일이에요. 아이가 숙제를 안 하려는 이유를 먼저 파악해 보는 게 
    45.59s  agent 발화 끝
    45.86s  ⚡SPAN 주입(IRRELEVANT) [d'=0.46s / d_lead=3.01s]: The current weather in Barcelona is 28.5°C, humidity 62%, wind 7.2 km/
    57.62s  user  발화 시작: 음, 좀 어려워하는 것 같아요.
    57.62s  agent 발화 끝
    60.12s  agent 발화 시작: 어려워한다면, 함께 숙제를 도와주면서 작은 성공 경험을 만들어 주는 게 좋을 것 같아요.
    60.12s  user  발화 끝
    66.63s  user  발화 시작: 좋은 생각이네요. 아이와 함께 시간을 보내는 게 제일 중요한 것 같아요.
    66.63s  agent 발화 끝
    72.14s  agent 발화 시작: 음.
    72.14s  user  발화 끝
    72.35s  <ret> 발화 (turn15 첫 프레임)
    72.65s  agent 발화 시작: <ret> 함께 책을 읽거나, 게임을 하거나, 아이와 단둘이 시간을 보내는 것만으로도 충분히 연결될 수 있어
    72.65s  agent 발화 끝
    72.82s  ⚡SPAN 주입 [d'=0.47s / d_lead=7.01s]: Simple ways to connect with children include reading together, playing
    79.66s  user  발화 시작: 네.
    79.66s  agent 발화 끝
    80.16s  user  발화 시작: 맞아요. 그런데, 주말에 아이와 함께 갈 만한 곳이 있을까요?
    80.16s  user  발화 끝
    84.59s  <ret> 발화 (turn18 첫 프레임)
    84.67s  agent 발화 시작: <ret> 부산에는 해운대 아미소 라 베리타라는 이탈리아 식당, 수영 팔도 돼지국밥, 그리고 밀락 회센터가 
    84.67s  user  발화 끝
    85.91s  ⚡SPAN 주입 [d'=1.32s / d_lead=7.01s]: (tool result) Restaurants found: 1. Haeundae Amiso La Verita (Italian,
    91.68s  user  발화 시작: 그렇죠.
    91.68s  agent 발화 끝
    92.19s  user  발화 시작: 회센터는 아이가 좋아할 것 같아요.
    92.19s  user  발화 끝
    94.69s  agent 발화 시작: 아이가 회를 좋아한다면, 밀락 회센터에 가서 신선한 회를 맛보는 것도 좋을 것 같아요.
    94.69s  user  발화 끝
   101.20s  user  발화 시작: 그렇죠.
   101.20s  agent 발화 끝
   101.70s  user  발화 시작: 네, 좋아요. 감사합니다.
   101.70s  user  발화 끝
   103.21s  agent 발화 시작: 도움이 되었다니 다행이에요.
   103.21s  user  발화 끝
   104.71s  agent 발화 끝
