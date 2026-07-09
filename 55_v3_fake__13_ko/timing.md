# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Casey",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "home",
#       "text": "User's home address is 203 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-07-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-06-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데미 로바토의 새 앨범이 언제 나오나요? 이천십오년 기준으로요 | S2 잠깐만요, 혹시 그 앨범 제목도 알 수 있을까요? | S3 네, "Cool for the Summer"는 정말 좋아해요. | S4 아, 그렇군요. 데미 로바토는 앞으로 어떤 음악을 할까요?

     0.00s  user  발화 시작: 데미 로바토의 새 앨범이 언제 나오나요? 이천십오년 기준으로요.
     4.29s  <ret> 발화 (turn1 첫 프레임)
     4.30s  user  발화 끝
     4.44s  agent 발화 시작: <ret> 아, 데미 로바토의 새 앨범 출시일이 궁금하시군요. 잠시만 확인해 볼게요.
     6.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: October 2015.
     9.83s  agent 발화 시작: 데미 로바토의 새 앨범은 이천십오년 십월에 발매됩니다.
    10.04s  agent 발화 끝
    13.71s  agent 발화 끝
    13.77s  user  발화 시작: 와, 십월이군요!
    15.40s  <ret> 발화 (turn4 첫 프레임)
    15.57s  user  발화 끝
    15.64s  agent 발화 시작: <ret> 네, 맞아요. 이천십오년 십월에 새 앨범이 나왔어요. 혹시 다른 앨범에 대해서도 궁금하신가요?
    17.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.71s]: The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars 
    22.35s  agent 발화 끝
    22.66s  user  발화 시작: 잠깐만요, 혹시 그 앨범 제목도 알 수 있을까요?
    26.13s  user  발화 끝
    26.26s  <ret> 발화 (turn6 첫 프레임)
    26.32s  agent 발화 시작: <ret> 아, 네, 앨범 제목도 궁금하시군요. 확인해 보겠습니다.
    28.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.54s]: (tool result) …Confident is the fifth studio album by American singer 
    30.79s  agent 발화 시작: 이천십오년에 발매된 데미 로바토의 앨범 제목은 "Confident"입니다. 십월 십육일에 나왔어요.
    30.86s  agent 발화 끝
    32.89s  user  발화 시작: 음.
    33.30s  user  발화 끝
    36.32s  agent 발화 시작: "Confident" 앨범에는 "Cool for the Summer"와 "Confident"라는 싱글이 수록
    36.49s  agent 발화 끝
    43.31s  user  발화 시작: 네, "Cool for the Summer"는 정말 좋아해요.
    43.46s  agent 발화 끝
    45.84s  agent 발화 시작: 아, "Cool for the Summer"를 좋아하시는군요! 저도 그 노래 정말 신나더라고요.
    45.84s  user  발화 끝
    49.90s  user  발화 시작: 그 앨범의 반응은 어땠나요? 평론가들은 어떻게 평가했는지 궁금해요.
    50.52s  agent 발화 끝
    54.06s  <ret> 발화 (turn13 첫 프레임)
    54.29s  agent 발화 시작: <ret> 평론가들의 평가는 엇갈렸지만, 전반적으로는 긍정적인 반응이 많았다고 해요.
    54.39s  user  발화 끝
    56.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.28s]: Confident received generally positive reviews from critics, who praise
    59.43s  agent 발화 시작: "Confident" 앨범은 평론가들에게서 대체로 긍정적인 평가를 받았어요. 데미 로바토의 보컬과 작사 실력
    59.57s  agent 발화 끝
    63.81s  user  발화 시작: 예.
    64.21s  user  발화 끝
    67.66s  user  발화 시작: 아, 그렇군요. 데미 로바토는 앞으로 어떤 음악을 할까요?
    67.82s  agent 발화 끝
    72.01s  user  발화 끝
    72.13s  agent 발화 시작: 데미 로바토는 앞으로도 다양한 음악 스타일을 시도하며 자신만의 색깔을 보여줄 거라고 생각해요. 앞으로의 활동
    80.94s  agent 발화 끝
