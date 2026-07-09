# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Hugo",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-15",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "home",
#       "text": "User's home address is 517 Maple Drive."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 휴고님. 저는 클렌이라고 해요. 돈 관리와 예산 짜는 걸 도와드리는 전문가랍니다.
     6.06s  agent 발화 끝
     6.13s  user  발화 시작: 아, 네. 뉴질랜드 여행 계획 세우고 있는데, 혹시 추천해 줄 만한 곳 있어요?
    11.04s  agent 발화 시작: 뉴질랜드 여행을 계획하고 계시는군요. [이 공 이 육 공 오 이 칠] 뉴질랜드 십월 여행을 계획하고 계시다는
    11.13s  user  발화 끝
    17.92s  user  발화 시작: 아.
    18.37s  user  발화 끝
    24.53s  agent 발화 시작: 액티비티를 좋아하신다면 퀸스타운을 추천해 드리고 싶어요. 번지점프나 제트보트처럼 스릴 넘치는 활동을 즐길 수
    24.63s  agent 발화 끝
    34.45s  user  발화 시작: … 혹시 퀸스타운 말고 다른 곳은 없을까요? 너무 붐빌 것 같아서요.
    35.15s  agent 발화 끝
    39.21s  agent 발화 시작: 붐비는 곳을 피하고 싶으시군요. 그럼 남섬의 밀포드 사운드를 추천드려요. 피오르드 지형의 아름다움을 만끽할 
    39.27s  user  발화 끝
    43.38s  user  발화 시작: 음.
    43.78s  user  발화 끝
    51.59s  user  발화 시작: 밀포드 사운드요? 거기는 어떻게 가야 하나요?
    51.77s  agent 발화 끝
    54.36s  agent 발화 시작: 밀포드 사운드는 보통 퀸스타운이나 테아나우에서 출발하는 투어를 이용하는 경우가 많아요. 아니면 직접 차를 렌
    54.54s  user  발화 끝
    65.95s  agent 발화 끝
