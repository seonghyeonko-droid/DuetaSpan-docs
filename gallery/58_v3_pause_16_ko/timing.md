# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "준호",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-15",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-11-28",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-22",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 올해 대학 월드시리즈 우승팀이 어디였지? | S2 최근 몇 년 동안도 계속 강세를 보였어? | S3 …혹시 그 때 우승팀… | S4 맞아, 팀워크가 중요하지. 그럼…

     0.00s  user  발화 시작: 올해 대학 월드시리즈 우승팀이 어디였지?
     2.47s  <ret> 발화 (turn1 첫 프레임)
     2.87s  agent 발화 시작: <ret> 올해 대학 월드시리즈 우승팀은 오리건 주립대학교였는데, 챔피언십 시리즈에서 노틀담 대학교를 열한대
     2.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.43s]: Oregon State won the 2024 College World Series, defeating Notre Dame 1
     2.95s  user  발화 끝
    11.27s  user  발화 시작: 오리건 주립대학교… 음… 그 학교는 야구로 유명한가?
    11.30s  agent 발화 끝
    14.97s  agent 발화 시작: 오리건 주립대학교는 오랜 전통을 가진 명문 야구팀으로 잘 알려져 있어요.
    15.11s  user  발화 끝
    17.27s  user  발화 시작: 응.
    17.49s  user  발화 끝
    20.48s  agent 발화 끝
    21.27s  user  발화 시작: 최근 몇 년 동안도 계속 강세를 보였어?
    23.07s  <ret> 발화 (turn6 첫 프레임)
    23.23s  agent 발화 시작: <ret> 오리건 주립대학교는 이천육년, 이천칠년, 그리고 이천십팔년에 대학 월드시리즈에서 세 번이나 우승했
    23.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: Oregon State has won three College World Series championships, in 2006
    23.40s  user  발화 끝
    31.43s  agent 발화 끝
    33.45s  user  발화 시작: 아, 이천십팔년에도 우승했었구나… —
    35.36s  user  발화 시작: …혹시 그 때 우승팀…
    35.57s  user  발화 끝
    36.92s  user  발화 끝
    38.30s  user  발화 시작: …멤버 중에 유명한 선수 있었어?
    40.97s  agent 발화 시작: 이천십팔년 우승팀에는 트레버 호턴 선수와 닉 무디 선수 같은 뛰어난 선수들이 활약했어요.
    40.97s  user  발화 끝
    44.02s  user  발화 시작: 응.
    44.33s  user  발화 끝
    47.58s  agent 발화 시작: 야구는 팀워크가 중요하죠. 각자의 역할을 잘 해낼 때 좋은 결과를 얻을 수 있어요.
    47.63s  agent 발화 끝
    54.11s  agent 발화 끝
    54.33s  user  발화 시작: 맞아, 팀워크가 중요하지. 그럼…
    56.92s  user  발화 끝
    58.54s  user  발화 시작: …이번 시즌에도 좋은 성적을 거둘 가능성이 높을까?
    62.11s  agent 발화 시작: 오리건 주립대학교는 꾸준히 좋은 선수들을 육성하고 있기 때문에, 앞으로도 좋은 성적을 기대해 볼 수 있을 거
    62.19s  user  발화 끝
    69.98s  agent 발화 끝
