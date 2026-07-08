# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Make the text bold by clicking the bold button inside the ed
     4.61s  agent 발화 시작: <ret> Certainly. The bold button within the editor iframe ha
     4.61s  <ret> 발화 (turn1 첫 프레임)
     4.61s  user  발화 끝
     4.77s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.38s]: (button clicked: aria-label=Bold)
     9.61s  user  발화 시작: Okay, uh, now make it italic.
     9.61s  agent 발화 끝
    11.92s  agent 발화 시작: <ret> Of course. The italic button inside the editor iframe 
    11.92s  <ret> 발화 (turn3 첫 프레임)
    11.92s  user  발화 끝
    12.32s  ⚡SPAN 주입 [d'=0.40s / d_lead=0.77s]: (button clicked: aria-label=Italic)
    16.92s  user  발화 시작: Good. Now, can you search for articles on the effects of sle
    16.92s  agent 발화 끝
    22.69s  agent 발화 시작: <ret> Absolutely. Search results show articles from NIH, Har
    22.69s  <ret> 발화 (turn5 첫 프레임)
    22.69s  user  발화 끝
    23.01s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.38s]: (search results: "Sleep Deprivation and Memory Consolidation" - Nation
    28.46s  user  발화 시작: [sigh] That's a lot to read. Is there a consensus on how muc
    28.46s  agent 발화 끝
    34.61s  agent 발화 시작: It's a surprisingly complex question, actually. Individual s
    34.61s  user  발화 끝
    39.61s  user  발화 시작: But… what’s the average?
    39.61s  agent 발화 끝
    41.15s  agent 발화 시작: <ret> Generally speaking… Most adults need between seven and
    41.15s  <ret> 발화 (turn9 첫 프레임)
    41.15s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.77s]: (average sleep duration: 7-9 hours)
    41.15s  user  발화 끝
    48.07s  user  발화 시작: Seven to nine… Hmm. That’s more than I usually get. I— I mea
    48.07s  agent 발화 끝
    54.22s  agent 발화 시작: Chronic sleep loss can have significant impacts on cognitive
    54.22s  user  발화 끝
    59.61s  user  발화 시작: Yeah. [happy] I wonder if there’s a sleep study I could join
    59.61s  agent 발화 끝
    64.61s  agent 발화 시작: <ret> I've found a couple. Somnus Sleep Center and Restful N
    64.61s  <ret> 발화 (turn13 첫 프레임)
    64.61s  user  발화 끝
    65.61s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.54s]: (sleep study locations: "Somnus Sleep Center - 123 Main Street, Anytow
    71.14s  user  발화 시작: Somnus… can you check their availability for a new participa
    71.14s  agent 발화 끝
    74.99s  agent 발화 시작: <ret> Let me see… Somnus Sleep Center has a new participant 
    74.99s  <ret> 발화 (turn15 첫 프레임)
    74.99s  user  발화 끝
    75.15s  ⚡SPAN 주입 [d'=0.16s / d_lead=1.15s]: (availability: next available screening: December twenty-first, 2023, 
    83.07s  user  발화 시작: Perfect. Book it for me.
    83.07s  agent 발화 끝
    84.99s  agent 발화 시작: <ret> Done. Your screening at Somnus Sleep Center is confirm
    84.99s  <ret> 발화 (turn17 첫 프레임)
    84.99s  user  발화 끝
    85.23s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.38s]: (appointment confirmation: Somnus Sleep Center, December 21, 2023, 10:
    93.83s  agent 발화 끝
