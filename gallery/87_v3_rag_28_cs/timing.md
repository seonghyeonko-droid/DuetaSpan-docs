# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Ruby",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-11-25",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 좀 길을 잃은 기분이에요. 사람들과 잘 연결되지 않는 것 | S2 흠, 그 말이 맞네요. 예전에 천문학을 정말 좋아했었는데… | S3 정말… 가까운 곳에 있네요! | S4 …그냥 어색할 것 같아요.

     0.00s  user  발화 시작: 요즘 좀 길을 잃은 기분이에요. 사람들과 잘 연결되지 않는 것 같아서요.
     0.04s  agent 발화 시작: 그렇게 느끼시는 건 완전히 자연스러운 일이에요. 진정한 관계를 맺는 데는 시간과 노력이 필요하고, 불안하게 
     0.04s  user  발화 끝
     0.07s  <ret> 발화 (turn5 첫 프레임)
     0.10s  user  발화 시작: 음… 다들 자기들 그룹이 있는 것 같고, 저는 항상 밖에서 서성이네요.
     0.10s  agent 발화 끝
     0.14s  agent 발화 시작: 소외감을 느끼시는 것 같아서 마음이 아프네요. 혹시 그 그룹들이 왜 그렇게 매력적으로 느껴지는지 함께 알아볼
     0.14s  user  발화 끝
     0.20s  user  발화 시작: 아마 제 관심사를 공유하는 친구들을 원하는데, 어디서 찾아야 할지 모르겠어요.
     0.20s  agent 발화 끝
     0.23s  agent 발화 시작: <ret> 공통의 열정을 가진 친구들을 찾는 건 취미 활동을 하거나, 자원봉사를 하거나, 관심사에 맞는 클럽
     0.23s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Common interests are often found through hobbies, volunteering, or joi
     0.23s  user  발화 끝
     0.30s  user  발화 시작: 흠, 그 말이 맞네요. 예전에 천문학을 정말 좋아했었는데…
     0.30s  agent 발화 끝
     0.31s  <ret> 발화 (turn12 첫 프레임)
     0.33s  agent 발화 시작: 오, 천문학은 정말 멋진 분야죠! 우리 자신보다 더 큰 것에 연결되어 있다는 느낌을 받게 해주고, 분명히 공
     0.33s  user  발화 끝
     0.40s  user  발화 시작: 네.
     0.40s  agent 발화 끝
     0.41s  user  발화 시작: 네, 하지만 망원경을 들여다본 지 몇 년이나 됐어요. 감이 떨어졌을 것 같아요.
     0.41s  user  발화 끝
     0.45s  agent 발화 시작: 잠시 쉬었다가 다시 시작하면 감이 떨어지는 건 괜찮아요. 예전의 열정을 되찾는 것은 정말 보람 있는 일이고,
     0.45s  user  발화 끝
     0.46s  <ret> 발화 (turn23 첫 프레임)
     0.52s  user  발화 시작: 그러면… 근처에 천문학 클럽이 있는지 궁금하네요.
     0.52s  agent 발화 끝
     0.55s  agent 발화 시작: <ret> 서울천문동호회는 매달 둘째 토요일에 한국천문과학교육원에서 만나고, 더 자세한 정보는 sas.or.
     0.55s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) The Seoul Astronomical Society meets every second Saturd
     0.55s  user  발화 끝
     0.59s  user  발화 시작: 네.
     0.59s  agent 발화 끝
     0.60s  user  발화 시작: 정말… 가까운 곳에 있네요!
     0.60s  user  발화 끝
     0.61s  agent 발화 시작: [happy] 기회가 그렇게 편리하게 찾아올 때 얼마나 멋진지, 그렇지 않나요? 관심사를 다시 불러일으키기에
     0.61s  user  발화 끝
     0.67s  user  발화 시작: 그렇겠죠. 그런데 만약 제가 가서…
     0.67s  agent 발화 끝
     0.69s  user  발화 시작: …이미 다들 서로 알고 있다면 어떡하죠?
     0.69s  user  발화 끝
     0.71s  agent 발화 시작: 그건 정말 타당한 걱정이에요. 이미 관계가 형성된 그룹에 합류하는 것은 부담스러울 수 있어요.
     0.71s  user  발화 끝
     0.76s  user  발화 시작: …그냥 어색할 것 같아요.
     0.76s  agent 발화 끝
     0.77s  agent 발화 시작: 어색하죠, 그리고 그 느낌을 인정하는 건 괜찮아요. 천문학 경험에 대한 간단한 소개를 준비하면 도움이 될까요
     0.77s  user  발화 끝
     0.83s  user  발화 시작: 아.
     0.83s  agent 발화 끝
     0.83s  user  발화 시작: 좋은 생각이네요, 실제로. 이번 주말 날씨는 어떤가요?
     0.83s  user  발화 끝
     0.86s  agent 발화 시작: <ret> 현재 서울의 기온은 섭씨 이십사도이고, 습도는 육십오퍼센트, 풍속은 시속 삼킬로미터이며, 하늘은 
     0.86s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) Current conditions in Seoul: 24.0°C, humidity 65%, wind 
     0.86s  user  발화 끝
     0.93s  user  발화 시작: 네.
     0.93s  agent 발화 끝
     0.93s  user  발화 시작: 완벽하네요! 고마워요, 라리미.
     0.93s  user  발화 끝
     0.95s  agent 발화 시작: 천만에요. 첫걸음을 내딛는 것이 가장 어려울 수 있지만, 종종 가장 보람 있는 일이라는 것을 기억하세요.
     0.95s  user  발화 끝
     1.00s  agent 발화 끝
