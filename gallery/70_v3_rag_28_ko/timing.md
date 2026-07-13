# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "가완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음, 돈에 “In God We Trust”가 언제 처음 새겨졌 | S2 아, 그건 알지. 그럼 “In… | S3 점차적으로? 얼마나 걸렸는데? — | S4 신기하네. 계속 유지되고 있다니.

     0.00s  user  발화 시작: 음, 돈에 “In God We Trust”가 언제 처음 새겨졌는지 궁금해.
     5.16s  <ret> 발화 (turn1 첫 프레임)
     5.48s  agent 발화 시작: <ret> 돈에 “In God We Trust”가 처음 새겨진 건, 남북전쟁 시기인 천팔백육십사년이에요. 당
     5.48s  ⚡SPAN 주입 [d'=1.44s / d_lead=8.22s]: The United States first authorized the use of “In God We Trust” on coi
     5.48s  user  발화 끝
    13.70s  user  발화 시작: 응.
    13.70s  agent 발화 끝
    14.25s  user  발화 시작: 천팔백육십사년이라고? 그게 왜 갑자기 나타난 건데?
    14.25s  user  발화 끝
    17.53s  agent 발화 시작: 그건 당시 전쟁 중에 국민적인 믿음을 강화하려는 의도였던 것 같아요.
    17.53s  user  발화 끝
    23.01s  user  발화 시작: 믿음 강화라… 좀 이상한데. 그전에는 없었잖아?
    23.01s  agent 발화 끝
    26.22s  <ret> 발화 (turn6 첫 프레임)
    26.30s  agent 발화 시작: <ret> 천팔백육십사년 이전에는 “E Pluribus Unum”, 즉 “다수로부터 하나”라는 문구가 미국 
    26.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.12s]: Prior to 1864, the motto “E Pluribus Unum” (“Out of Many, One”) appear
    26.30s  user  발화 끝
    33.42s  user  발화 시작: 아, 그건 알지. 그럼 “In…
    33.42s  agent 발화 끝
    36.16s  user  발화 시작: …God We Trust”가 완전히 대체한 거야?
    36.16s  user  발화 끝
    39.45s  agent 발화 시작: 완전히 대체하기까지는 시간이 좀 걸렸어요. 점차적으로 사용이 확대되었답니다.
    39.45s  user  발화 끝
    43.84s  user  발화 시작: 점차적으로? 얼마나 걸렸는데? —
    43.84s  agent 발화 끝
    46.03s  user  발화 시작: …근데 그게 진짜 돈에 영향을 줬을까? 경제적으로?
    46.03s  user  발화 끝
    49.86s  user  발화 시작: 어.
    49.86s  user  발화 끝
    50.09s  <ret> 발화 (turn13 첫 프레임)
    50.41s  agent 발화 시작: <ret> 천구백오십육년에 “In God We Trust”가 미국의 공식 모토가 되었고, “E Pluribu
    50.41s  ⚡SPAN 주입 [d'=1.92s / d_lead=7.12s]: In 1956, “In God We Trust” became the official motto of the United Sta
    50.41s  user  발화 끝
    57.53s  user  발화 시작: 공식 모토라… 그럼 지금도 계속 쓰고 있는 거야?
    57.53s  agent 발화 끝
    61.92s  agent 발화 시작: 네, 지금도 미국 동전과 지폐에 “In God We Trust”가 새겨져 있습니다.
    61.92s  user  발화 끝
    67.94s  user  발화 시작: 신기하네. 계속 유지되고 있다니.
    67.94s  agent 발화 끝
    70.14s  agent 발화 시작: 그런 역사가 있는 거죠. 마음의 평화를 찾는데 도움이 되었으면 좋겠어요.
    70.14s  user  발화 끝
    75.62s  user  발화 시작: 그래.
    75.62s  agent 발화 끝
    76.16s  user  발화 시작: 마음의 평화라… 고마워, 바리엔.
    76.16s  user  발화 끝
    78.36s  user  발화 끝
