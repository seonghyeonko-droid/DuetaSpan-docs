# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "노빈",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-05-11",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "home",
#       "text": "User's home address is 203 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범 언제 나오나요? | S2 아, 그렇군요. | S3 그 앨범에 어떤 노래들이 들어 있어요? | S4 혹시 그 앨범의 프로듀서는 누구인가요?

     0.00s  user  발화 시작: 데미 로바토 새 앨범 언제 나오나요?
     2.58s  user  발화 끝
     2.92s  agent 발화 시작: 데미 로바토의 새 앨범 출시일에 대해 궁금하시군요.
     4.93s  user  발화 시작: 음.
     5.42s  user  발화 끝
     6.16s  agent 발화 끝
     6.39s  user  발화 시작: 네, 맞아요.
     7.32s  <ret> 발화 (turn4 첫 프레임)
     7.53s  user  발화 끝
     7.55s  agent 발화 시작: <ret> 데미 로바토의 다섯 번째 스튜디오 앨범, *Confident*는… 이천십오년 십월에 발매되었어요.
     9.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.03s]: [source: Wikipedia] Demi Lovato's fifth studio album, *Confident*, was
    14.58s  agent 발화 끝
    15.85s  user  발화 시작: 아, 그렇군요.
    17.26s  <ret> 발화 (turn6 첫 프레임)
    17.46s  user  발화 끝
    17.65s  agent 발화 시작: <ret> 데미 로바토가 앨범을 꾸준히 발표하고 있는데, 이전 앨범에 대해서도 궁금하신가요?
    19.26s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.47s]: [source: Britannica] The Sahara Desert is the largest hot desert in th
    20.85s  user  발화 시작: 음.
    21.66s  user  발화 끝
    23.04s  agent 발화 시작: 그녀의 음악적 변화에 대해 이야기해 볼 수도 있겠네요.
    23.12s  agent 발화 끝
    26.06s  user  발화 시작: 아니요, 그냥 이번 앨범에 관심이 많아서요.
    26.09s  agent 발화 끝
    29.20s  user  발화 끝
    29.63s  agent 발화 시작: *Confident* 앨범은 데미 로바토의 음악 스타일에서 중요한 변화를 보여주는 앨범이라고—
    34.99s  user  발화 시작: 그 앨범에 어떤 노래들이 들어 있어요?
    35.74s  agent 발화 끝
    37.48s  agent 발화 시작: 아, 네. *Confident* 앨범에는 ‘Cool for the Summer’나 ‘Sorry Not Sor
    37.52s  user  발화 끝
    40.91s  user  발화 시작: 예.
    41.40s  user  발화 끝
    43.92s  user  발화 시작: ‘Cool for the Summer’ 정말 좋아하는데.
    44.15s  agent 발화 끝
    46.41s  agent 발화 시작: ‘Cool for the Summer’는 많은 사랑을 받았죠. 데미 로바토의 매력이 잘 드러나는 곡이라고 생
    46.50s  user  발화 끝
    49.04s  user  발화 시작: 음.
    49.49s  user  발화 끝
    52.06s  agent 발화 끝
    52.15s  user  발화 시작: 혹시 그 앨범의 프로듀서는 누구인가요?
    54.38s  <ret> 발화 (turn18 첫 프레임)
    54.61s  agent 발화 시작: <ret> *Confident* 앨범은 주로 맥스 마틴, 사반 코테차, 쉘백이 프로듀싱을 맡았답니다.
    54.73s  user  발화 끝
    56.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: [source: AllMusic] *Confident* was primarily produced by Max Martin, S
    57.03s  user  발화 시작: 네.
    57.48s  user  발화 끝
    60.33s  user  발화 시작: 맥스 마틴이요? 유명한 프로듀서네요.
    60.40s  agent 발화 끝
    63.00s  agent 발화 시작: 네, 맥스 마틴은 팝 음악계에서 아주 유명한 프로듀서예요. 많은 히트곡을 만들었죠.
    63.05s  user  발화 끝
    69.11s  agent 발화 끝
