# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: 우서 · Location: Busan, South Korea · Nationality: Korean · Gender: female · Age: 40s · TZ: Asia/Seoul (KST, UTC+9) · Currency: KRW (₩)
#   B. 저장 메모리:
#      [2026-06-21] User has a Poodle named Coco.
#      [2026-04-08] User is into marathon training.
#      [2026-03-20] User is vegan.
#      [2026-02-17] User's home address is 609 Oak Avenue.
#   B. 과거 대화 요약:
#      [2026-06-01] Apartment hunting downtown — wanted a pet-friendly building; budget for 2 bedrooms
#      [2026-05-21] Setting up a home network — asked about mesh routers; coverage for a 3-story house


     0.00s  user  발화 시작: I’ve been researching my family history, and I came across t
     8.75s  <ret> 발화 (turn1 첫 프레임)
     8.81s  user  발화 끝
     8.83s  agent 발화 시작: <ret> That’s a wonderful question, tracing family names is s
     9.71s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.32s]: The surname Du Plessis is of French origin, meaning “of Plessis”.
    16.95s  user  발화 시작: Mhm.
    17.45s  user  발화 끝
    19.63s  agent 발화 끝
    19.66s  user  발화 시작: Oh, French! That’s interesting. I always assumed it was…well
    26.35s  <ret> 발화 (turn4 첫 프레임)
    26.75s  agent 발화 시작: <ret> It seems your assumption wasn’t far off, as it did tra
    26.75s  user  발화 끝
    28.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.93s]: The Plessis family were Norman nobles who followed William the Conquer
    36.76s  agent 발화 끝
    37.18s  user  발화 시작: So it came to England with the Normans? That explains a lot,
    44.55s  user  발화 끝
    44.63s  agent 발화 시작: It did spread, eventually reaching South Africa with the Hug
    54.46s  agent 발화 끝
