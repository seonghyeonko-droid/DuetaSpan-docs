# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "소국",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-18",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-02",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 네스. 요즘 배우자랑 자주 다투는데, 어떻게 하면 | S2 음… 그냥 듣는 거랑 뭐가 달라요? | S3 …내면 배우자는 저를 비난만 해요— | S4 배우자가 제 마음을 알아주면 좋겠어요.

     0.00s  user  발화 시작: 안녕하세요, 네스. 요즘 배우자랑 자주 다투는데, 어떻게 하면 좋을까요?
     5.04s  agent 발화 시작: 안녕하세요. 부부싸움은 정말 힘드시죠. 서로의 감정을 이해하려는 노력이 중요해요.
     5.04s  user  발화 끝
    10.08s  user  발화 시작: 그게 잘 안 돼요. 제가 화를 내면 배우자도 똑같이 하거든요.
    10.08s  agent 발화 끝
    15.57s  <ret> 발화 (turn3 첫 프레임)
    15.67s  agent 발화 시작: <ret> 상대방의 말을 제대로 듣고 이해하려는 노력이 필요해요. 적극적인 경청은 상대방의 감정을 파악하는 
    15.67s  user  발화 끝
    17.07s  ⚡SPAN 주입 [d'=1.50s / d_lead=8.40s]: Active listening involves fully concentrating, understanding, respondi
    24.07s  user  발화 시작: 적극적인 경청이요? 그게 뭔데요?
    24.07s  agent 발화 끝
    26.31s  agent 발화 시작: 상대방의 말에 집중하고, 이해하려고 노력하고, 반응을 보이는 거예요.
    26.31s  user  발화 끝
    30.79s  user  발화 시작: 응.
    30.79s  agent 발화 끝
    31.35s  user  발화 시작: 음… 그냥 듣는 거랑 뭐가 달라요?
    31.35s  user  발화 끝
    34.70s  agent 발화 시작: 단순히 듣는 것보다 더 깊이 공감하고 이해하려는 자세가 필요해요. 상대방의 감정을 함께 느껴보려고 노력하는 
    34.70s  user  발화 끝
    43.10s  user  발화 시작: 아, 그렇군요. 그런데 제가 화를…
    43.10s  agent 발화 끝
    45.90s  user  발화 시작: …내면 배우자는 저를 비난만 해요—
    45.90s  user  발화 끝
    48.70s  user  발화 시작: …비난을 어떻게 받아쳐야 할까요? 계속 싸우기 싫은데.
    48.70s  user  발화 끝
    52.62s  agent 발화 시작: 비난을 받으면 방어적으로 되기 쉬운데요, 잠시 숨을 고르고, 상대방의 말에서 어떤 감정이 느껴지는지 파악해 
    52.62s  user  발화 끝
    61.01s  user  발화 시작: 그치.
    61.01s  agent 발화 끝
    61.57s  user  발화 시작: 숨을 고르고… 감정을 파악하고… 쉽지 않네요.
    61.57s  user  발화 끝
    64.93s  agent 발화 시작: [curious] 처음에는 어려울 수 있지만, 연습하면 익숙해질 거예요. 배우자의 감정을 이해하려고 노력하는
    64.93s  user  발화 끝
    74.45s  user  발화 시작: 배우자가 제 마음을 알아주면 좋겠어요.
    74.45s  agent 발화 끝
    77.25s  agent 발화 시작: 배우자에게 솔직하게 자신의 감정을 표현하는 것도 중요해요. “나는 이런 점 때문에 힘들다”라고 분명하게 말해
    77.25s  user  발화 끝
    85.08s  user  발화 시작: 그래.
    85.08s  agent 발화 끝
    85.64s  user  발화 시작: 알겠습니다. 네스, 정말 감사합니다.
    85.64s  user  발화 끝
    87.88s  agent 발화 시작: [happy] 도움이 되었다니 기쁘네요.
    87.88s  user  발화 끝
    90.12s  agent 발화 끝
