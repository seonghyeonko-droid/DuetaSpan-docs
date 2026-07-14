# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "준정",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-04",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "floor",
#       "text": "User lives on the 2nd floor."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "skill",
#       "text": "User is quite experienced with long-distance cycling."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-30",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-03-06",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-01-31",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2025-12-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 아이 러브 유 아이… | S2 오, 그렇군요. 그 노래 되게 좋아하는데. | S3 잠깐만, 지금 엄마한테 전화가 오네. | S4 그 노래 말고 다른 노래도 있나요?

     0.00s  user  발화 시작: 혹시 아이 러브 유 아이…
     2.69s  user  발화 시작: …헤이트 유 노래 부르는 사람 아세요?
     2.69s  user  발화 끝
     5.69s  <ret> 발화 (turn2 첫 프레임)
     5.91s  agent 발화 시작: <ret> 노래 부르는 사람은 미국의 싱어송라이터, Gnash라고 해요.
     5.91s  user  발화 끝
     6.89s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.76s]: Gnash is an American singer, songwriter and record producer.
     9.67s  user  발화 시작: 네.
     9.67s  agent 발화 끝
    10.21s  user  발화 시작: 아, 그렇군요.
    10.21s  user  발화 끝
    11.29s  agent 발화 시작: Gnash는 또 레코드 프로듀서로도 활동하고 있대요.
    11.29s  user  발화 끝
    14.51s  user  발화 시작: 오, 그렇군요. 그 노래 되게 좋아하는데.
    14.51s  agent 발화 끝
    17.74s  agent 발화 시작: [happy] 저도 그 노래 좋아해요! Gnash는 꽤 유명하죠.
    17.74s  user  발화 끝
    22.04s  user  발화 시작: 네.
    22.04s  agent 발화 끝
    22.57s  user  발화 시작: 지금 뭐 하고 있지?
    22.57s  user  발화 끝
    24.43s  <ret> 발화 (turn10 첫 프레임)
    24.72s  agent 발화 시작: <ret> Gnash는 이천십육년 오월에 데뷔 이 피, ‘u’를 발표했어요.
    24.72s  user  발화 끝
    24.73s  ⚡SPAN 주입 [d'=0.30s / d_lead=4.30s]: Gnash released his debut EP, u, in May 2016.
    29.02s  user  발화 시작: 잠깐만, 지금 엄마한테 전화가 오네.
    29.02s  agent 발화 끝
    31.71s  user  발화 시작: 아, 죄송해요.
    31.71s  user  발화 끝
    32.78s  agent 발화 시작: [sigh] 괜찮아요. 천천히 말씀하세요.
    32.78s  user  발화 끝
    34.93s  user  발화 시작: 그 노래 말고 다른 노래도 있나요?
    34.93s  agent 발화 끝
    37.77s  <ret> 발화 (turn15 첫 프레임)
    38.16s  agent 발화 시작: <ret> Gnash는 올리비아 오브라이언과 함께 부른 "I Hate U, I Love U"를 비롯해 여러 
    38.16s  user  발화 끝
    38.91s  ⚡SPAN 주입 [d'=1.14s / d_lead=10.21s]: Gnash has released several singles, including "I Hate U, I Love U" wit
    48.37s  user  발화 시작: 네, 다른 노래도 추천해 주세요.
    48.37s  agent 발화 끝
    51.06s  agent 발화 시작: [curious] 어떤 분위기의 노래를 좋아하세요? Gnash는 다양한 스타일의 곡들이 있거든요.
    51.06s  user  발화 끝
    56.43s  agent 발화 끝
